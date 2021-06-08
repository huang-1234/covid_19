

import * as echarts from 'echarts'

export function getTrendChinaEchart(chinaData, dataType) {
  //  console.log('getTrendChinaEchart/dataType<<',dataType)

  const chartDom = document.getElementById('china_dataShow');
  const myChart = echarts.init(chartDom);

  const dataCount = 5e5;
  const data = generateData(dataCount);

  const option = {
    title: {
      text: chinaData.length + ' Data',
      left: 10
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: false
        },
        saveAsImage: {
          pixelRatio: 2
        }
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      bottom: 90
    },
    dataZoom: [{
      type: 'inside'
    }, {
      type: 'slider'
    }],
    xAxis: {
      data: data.categoryData,
      silent: false,
      splitLine: {
        show: false
      },
      splitArea: {
        show: false
      }
    },
    yAxis: {
      splitArea: {
        show: false
      }
    },
    series: [{
      type: 'bar',
      data: data.valueData,
      large: true
    }]
  };
  function generateData() {

    const categoryData = [];
    const tenThousand = 1e4;
    const valueData = new Array(tenThousand);
    if ('Array' === Object.prototype.toString.call(chinaData).slice(8,-1)) {
      chinaData.forEach((currentItem, index, chinaData) => {
        valueData[index] = currentItem[dataType];
      });

      chinaData.forEach((currentItem, index, chinaData) => {
        categoryData[index] = currentItem.dateId;
      })
    }

    return {
      categoryData: categoryData,
      valueData: valueData
    };
  }

  option && myChart.setOption(option);
}