
/* 动态排序柱状图 */
import * as echarts from 'echarts';
import $ from 'jquery';

// import {getAllMouthDate} from '../api/axiosMonth';
import { chinaProvinceColor } from '../mock/provinceColor';
// import {countryColors} from '../mock/countryColors';

export const EpidemicChangeEchart = (dataSel,race,provinceCount,data) => {
  
  let dom = document.getElementById("container");
  let myChart = echarts.init(dom);

  let option;
  // 每隔update Frequency/1000 秒月份就加一
  let updateFrequency = race || 50000;
  const showRow = dataSel; // 选择展示哪一项数据
  const showMax = provinceCount;


  // const labApi = 'https://lab.isaaclin.cn'
  $.when(
    // $.getJSON('https://cdn.jsdelivr.net/npm/emoji-flags@1.3.0/data.json'),
    // $.getJSON(ROOT_PATH + '/data/asset/data/life-expectancy-table.json'),
    // $.getJSON(labApi+`/nCoV/api/news`),
  ).done(function (res0, res1,res2) {
      // console.log('flags<<\n',res0[0],'\ndata<<\n',res1,'\nres2<<\n',res2[0]);
    // console.log('res0Length<<',res0[0].length)
    // console.log('res0Length<<',res1[0].length)
    // console.log('res0Length<<',res2[0].length)
    // let flags = res0[0];
    
    // let data1 =  await getAllMouthDate() 

/*     
    async function getAllProvinceData() {
      return await getAllMouthDate()
      .then((res) => {
        const data = res.data;
        console.log('getAllMouthDate/then/data<<', data,  data.length);
        console.log('Object.prototype.toString.call<<data<<', Object.prototype.toString.call(data));
        const idx = 5;
        console.log('data[0][idx]<<', data[0][idx]);
        return data;
      })
      .catch((err) => {
        alert(err.message,'敢说我网络错误');
      })
    }
    */
    
    // console.log('jsonData<<',jsonData)
    // let data = jsonData.data;
    console.log('Object.prototype.toString.call<<data<<', Object.prototype.toString.call(data));
    console.log('data<<',data);


    const dataMonthidx = 5;
    let months = [];
    // console.log('data[2]<<',data[2]);
    for (let i = 0; i < data.length; ++i) {
      if (months.length === 0 || months[months.length-1] !== data[i][dataMonthidx]) {
        months.push(data[i][dataMonthidx]);
      }
    }
    console.log('months<<', months)

    // 开始月份0代表第一个月份数据
    let startIndex = 1;
    let startMonth = months[startIndex];

    let option = {
      grid: {
        top: 10,
        bottom: 30,
        left: 150,
        right: 80
      },
      xAxis: {
        max: 'dataMax',
        label: {
          formatter: function (n) {
            return Math.round(n);
          }
        }
      },
      dataset: {
        source: data.slice(1).filter(function (d) {
          return d[dataMonthidx] === startMonth;
        })
      },
      yAxis: {
        type: 'category',
        inverse: true,
        max: showMax,
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: 14
          },
          formatter: function (value) {
            return value ;
            // return value + '{flag|' + getFlag(value) + '}';
          },
          rich: {
            flag: {
              fontSize: 15,
              padding: 5
            }
          }
        },
        animationDuration: 300,
        animationDurationUpdate: 300
      },
      series: [{
        realtimeSort: true,
        seriesLayoutBy: 'column',
        type: 'bar',
        itemStyle: {
          color: function (param) {
            return chinaProvinceColor[param.value[4]] || '#5470c6';
          }
        },
        encode: {
          x: showRow,
          y: 4
        },
        label: {
          show: true,
          precision: 1,
          position: 'right',
          valueAnimation: true,
          fontFamily: 'monospace'
        }
      }],
      // Disable init animation.
      animationDuration: 0,
      animationDurationUpdate: updateFrequency,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
      graphic: {
        elements: [{
          type: 'text',
          right: 160,
          bottom: 60,
          style: {
            text: startMonth,
            font: 'bolder 32px monospace',
            fill: '#7fff00'
          },
          z: 100
        }]
      }
    };

    // console.log(option);
    myChart.setOption(option);

    for (let i = startIndex; i < months.length - 1; ++i) {
      (function (i) {
        setTimeout(function () {
          updateMonth(months[i + 1]);
        }, (i - startIndex) * updateFrequency);
      })(i);
    }

    function updateMonth(month) {
      let source = data.slice(1).filter(function (d) {
        return d[dataMonthidx] === month;
      });
      option.series[0].data = source;
      option.graphic.elements[0].style.text = month;
      myChart.setOption(option);
    }
  }).fail(function(error) {
    console.log('获取数据失败了',error)
  })

  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  return () => {
    // cleanup
  };
}