import React, { useEffect, useState } from 'react'
// import { ChinaMapEchart } from '../../Echart/china-left.js'
// import { getChinaMapEchart } from './ChinaMapEchart';
import * as echarts from 'echarts'
// import nameMap from '../../utils/nameMap'
import '../../styles/Map/ChinaMap.less'
import '../../utils/china.js'

const ChinaMap = (props) => {
  const { chinaData } = props
  const [number, setNumber] = useState(0);
  //  console.log('chinaData<<', chinaData);

  useEffect(() => {
    // ChinaMapEchart(chinaData)

    const chinaProvincesArr = chinaData.areaTree[0].children;

    const nameMapArr = chinaData.areaTree[0].children;
    const nameMap = {};
    nameMapArr.forEach((item, index) => {
      nameMap[index] = item.name;
    })

    let virusDatas = []
    chinaProvincesArr.forEach((item, index) => {
      virusDatas[index] = {}
      virusDatas[index].name = item.name
      if (number === 0) {
        virusDatas[index].value = item.total.confirm;
      } else {
        virusDatas[index].value = item.today.confirm;
      }
    })

    let myChart
    let linearBarDom = echarts.getInstanceByDom(document.querySelector('.map .chinaMap'))
    if (linearBarDom == null) {
      myChart = echarts.init(document.querySelector('.map .chinaMap'))
    } else {
      myChart = linearBarDom
    }
    // sb = size_base  // sr = size_race
    const sb = 20;
    const sr1 = 5, sr2 = 25, sr3 = 125, sr4 = 625, sr5 = 3125, sr6 = 15625;
    
    const dss = { // dss = data_sizes
      // mns = min_size ，  mxs = max_size
      mns0: 1, mxs0: sb - 1,
      mns1: sb, mxs1: sb * sr1 - 1,
      mns2: sb * sr1, mxs2: sb * sr2 - 1,
      mns3: sb * sr2,  mxs3: sb * sr3 - 1,
      mns4: sb * sr3 ,  mxs4: sb * sr4 - 1,
      mns5: sb * sr4 ,  mxs5: sb * sr5 - 1,
      mns6: sb * sr5 ,  mxx6: sb * sr6 - 1,
    }
    const labels = new Array(30);
    for (const index in dss) {
      labels.push(dss[index].toString());
    }
    const option = {
      tooltip: {
        trigger: 'item',
        // triggerOn: "mousemove",
        formatter: function (params) {
          return params.name + ' 有 ' + (params.value ? params.value + ' 人': 0 +'人')
        },
      },
      visualMap: {
        type: 'piecewise',
        pieces: [

          { max: 0, label: 0, color: '#2E8B57' },
          { min: dss.mns0, max: dss.mxs0, label: labels[0]+labels[1], color: '#48D1CC' },
          { min: dss.mns1, max: dss.mxs1, label: labels[2]+labels[3], color: '#fff7ba' },
          { min: dss.mns2, max: dss.mxs2, label: labels[4]+labels[5], color: '#ffc24b' },
          { min: dss.mns3, max: dss.mxs3, label: labels[6]+labels[7], color: '#fe5e3b' },
          { min: dss.mns4, max: dss.mxs4, label: labels[8]+labels[9], color: '#CD5C5C' },
          { min: dss.mns5,                label: labels[10]+labels[11], color: '#800000' },

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
          map: 'china',
          nameMap: nameMap,
          emphasis: {
            areaColor: '#ffffff',
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

    // getChinaMapEchart(chinaData, number);

  }, [chinaData.areaTree, chinaData.chinaTotal.confirm, chinaData.chinaTotal.nowConfirm, number])

  return (
    <div className='map'>
      <div className='chinaMap'></div>
      <div className='map_tab'>
        <div className='cur' onClick={() => setNumber(0)}>
          累计确诊
        </div>
        <div className='cur' onClick={() => setNumber(1)}>
          现有确诊
        </div>
      </div>
    </div>
  )
}

export default ChinaMap
