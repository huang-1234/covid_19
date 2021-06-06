
import * as echarts from 'echarts';
// import nameMap from 'nameMap';

export function WorldMapEchart(props) {
  const { foreignData, chinaData, number } = props;
  
  let virusDatas = []
  foreignData.foreignList.forEach((item, index) => {
    virusDatas[index] = {}
    virusDatas[index].name = item.name
    if (number === 0) {
      virusDatas[index].value = item.confirm
    } else {
      virusDatas[index].value = item.nowConfirm
    }
  })
  if (number === 0) {
    virusDatas.push({
      name: '中国',
      value: chinaData.chinaTotal.confirm,
    })
  } else {
    virusDatas.push({
      name: '中国',
      value: chinaData.chinaTotal.nowConfirm,
    })
  }
  let myChart
  let linearBarDom = echarts.getInstanceByDom(document.querySelector('.map .map_info'))
  if(linearBarDom == null) {
    myChart = echarts.init(document.querySelector('.map .map_info'))
  } else {
    myChart = linearBarDom
  }
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        return params.name + ' : ' + (params.value ? params.value : 0)
      },
    },
    visualMap: {
      type: 'piecewise',
      pieces: [
        { max: 0, label: '0', color: '#eee' },
        { min: 1, max: 499, label: '1-499', color: '#fff7ba' },
        { min: 500, max: 4999, label: '500-4999', color: '#ffc24b' },
        { min: 5000, max: 9999, label: '5000-9999', color: '#ff7c20' },
        { min: 10000, max: 100000, label: '1万-10万', color: '#fe5e3b' },
        { min: 100000, max: 500000, label: '10万-50万', color: '#e2482b' },
        { min: 500000, label: '50万以上', color: '#b93e26' },
      ],
      itemHeight: 10,
      itemWidth: 10,
      inverse: true,
    },
    series: [
      {
        name: '',
        data: virusDatas,
        type: 'map',
        map: 'world',
        nameMap: nameMap,
        emphasis: {
          areaColor: '#c92fff',
          label: {
            show: false,
          },
        },
        layoutCenter: ['center', 'center'],
        layoutSize: '150%',
      },
    ],
  }
  myChart.setOption(option)
}