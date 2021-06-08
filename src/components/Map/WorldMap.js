import React, { useEffect, useState } from 'react'
import * as echarts from 'echarts'
import nameMap from '../../utils/nameMap'
import '../../styles/Map/WorldMap.less'
import '../../utils/world'

const WorldMap = (props) => {
  const { chinaData, foreignData } = props
  const [number, setNumber] = useState(0);
  // console.log('WorldMap/foreignData<<',foreignData);
  // console.log('WorldMap/chinaData<<',chinaData);

  useEffect(() => {
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

    // sb = size_base  // sr = size_race
    const sb = 50;
    const sr1 = 8, sr2 = sr1*8, sr3 = sr2*8, sr4 = sr3*8, sr5 = sr4*8, sr6 = sr5*8;
    const dss = { // dss = data_sizes
      // mns = min_size ，  mxs = max_size
      mns0: 1, mxs0: sb - 1,
      mns1: sb, mxs1: sb * sr1 - 1,
      mns2: sb * sr1, mxs2: sb * sr2 - 1,
      mns3: sb * sr2,  mxs3: sb * sr3 - 1,
      mns4: sb * sr3 ,  mxs4: sb * sr4 - 1,
      mns5: sb * sr4 ,  mxs5: sb * sr5 - 1,
      mns6: sb * sr5 ,  mxs6: sb * sr6 - 1,
    }
    const option = {
      tooltip: {
        trigger: 'item',
        // triggerOn: "mousemove",
        formatter: function (params) {
          return params.name + ' : ' + (params.value ? params.value : 0)
        },
      },
      visualMap: {
        type: 'piecewise',
        pieces: [
          { min:0, max: 0, label: '0', color: '#2E8B57' },
          { min: dss.mns0, max: dss.mxs0, label: dss.mns0+'-'+dss.mxs0, color: '#48D1CC' },
          { min: dss.mns1, max: dss.mxs1, label: dss.mns1+'-'+dss.mxs1, color: '#fff7ba' },
          { min: dss.mns2, max: dss.mxs2, label: dss.mns2+'-'+dss.mxs2, color: '#ffc24b' },
          { min: dss.mns3, max: dss.mxs3, label: dss.mns3+'-'+dss.mxs3, color: '#fe5e3b' },
          { min: dss.mns4, max: dss.mxs4, label: dss.mns4+'-'+dss.mxs4, color: '#e2482b' },
          { min: dss.mns5, max: dss.mxs5, label: dss.mns5+'-'+dss.mxs5, color: '#CD5C5C' },
          { min: dss.mns6, label: '50万以上', color: '#800000' },
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
              show: true,
            },
          },
          layoutCenter: ['center', 'center'],
          layoutSize: '150%',
        },
      ],
    }
    myChart.setOption(option)
  }, [chinaData.chinaTotal.confirm, chinaData.chinaTotal.nowConfirm, foreignData.foreignList, number])

  return (
    <div className='map'>
      <div className='map_info'></div>
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

export default WorldMap
