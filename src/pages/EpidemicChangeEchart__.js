

import * as echarts from 'echarts';
import $ from 'jquery';

// import getAllMouthDate from '../api/axiosMonth'
import {countryColors} from '../mock/countryColors';

export const EpidemicChangeEchart = () => {
  
  let ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';
  let dom = document.getElementById("container");
  let myChart = echarts.init(dom);
  // let app = {};

  let option;
  // 每隔update Frequency/1000 秒年份就加一
  let updateFrequency = 5000;
  let dimension = 0;


  const labApi = 'https://lab.isaaclin.cn'
  $.when(
    $.getJSON('https://cdn.jsdelivr.net/npm/emoji-flags@1.3.0/data.json'),
    $.getJSON(ROOT_PATH + '/data/asset/data/life-expectancy-table.json'),
    $.getJSON(labApi+`/nCoV/api/news`),
  ).done(function (res0, res1,res2,res3) {
      console.log('flags<<\n',res0[0],'\ndata<<\n',res1[0],'\nres2<<\n',res2[0],'\nres3<<\n',res3);
    // console.log('res0Length<<',res0[0].length)
    // console.log('res0Length<<',res1[0].length)
    // console.log('res0Length<<',res2[0].length)
    let flags = res0[0];
    let data = res1[0];

    let years = [];
    for (let i = 0; i < data.length; ++i) {
      if (years.length === 0 || years[years.length-1] !== data[i][4]) {
        years.push(data[i][4]);
      }
    }
    //  console.log('years<<',years)

    function getFlag(countryName) {
      if (!countryName) {
        return '';
      }
      return (flags.find(function (item) {
        return item.name === countryName;
      }) || {}).emoji;
    }
    // 开始年份0代表第一个年份数据1800年
    let startIndex = 0;
    let startYear = years[startIndex];

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
          return d[4] === startYear;
        })
      },
      yAxis: {
        type: 'category',
        inverse: true,
        max: 10,
        axisLabel: {
          show: true,
          textStyle: {
            fontSize: 14
          },
          formatter: function (value) {
            return value + '{flag|' + getFlag(value) + '}';
          },
          rich: {
            flag: {
              fontSize: 25,
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
            return countryColors[param.value[3]] || '#5470c6';
          }
        },
        encode: {
          x: dimension,
          y: 3
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
            text: startYear,
            font: 'bolder 50px monospace',
            fill: 'rgba(100, 100, 100, 0.25)'
          },
          z: 100
        }]
      }
    };

    // console.log(option);
    myChart.setOption(option);

    for (let i = startIndex; i < years.length - 1; ++i) {
      (function (i) {
        setTimeout(function () {
          updateYear(years[i + 1]);
        }, (i - startIndex) * updateFrequency);
      })(i);
    }

    function updateYear(year) {
      let source = data.slice(1).filter(function (d) {
        return d[4] === year;
      });
      option.series[0].data = source;
      option.graphic.elements[0].style.text = year;
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