import React, { useEffect, useState, useRef } from 'react'

import './TrendChina.less'
import {provincesName} from '../../mock/provincesName'

import { getTrendChinaEchart } from './TrendChinaEchart'
// import { getLinerTrendChinaEchart } from './LinerTrendChinaEchart'



// import { getProvincesData } from '../../api/getSelectProvinceData'

import {getSelectProvinceData} from '../../api/getSelectProvinceData'


function TrendChina(props) {
  const { chinaData } = props

  const [dataType, setDataType] = useState('currentConfirmedCount');
  const [provincename, setProvincename] = useState('china')

  console.log('provincename<<',provincename)

  // 下面是一个bug，表示require的参数不能是一个变量，否则加载不进来
  // const chinaprovinceStr = '../../mock/china/' + provincename;
  // const china = require(chinaprovinceStr);
  // const china = require('../../mock/china/china');

  
  // const chinaMockData = china.data

  // let chinaMockData = getSelectProvinceData()

  let chinaMockData = getSelectProvinceData(provincename)

  const selectRef = useRef(null);

  const getSelectDOM = () => {

    let typeSelect = document.getElementById("dataType_hsq")
    const selectIdx = typeSelect.selectedIndex;
    //  console.log('selectIdx<<', selectIdx)
    const typeValue = typeSelect.options[selectIdx].value; // 数据类型
    //  console.log('getSelectDOM/typeValue<<', typeValue);
    setDataType(typeValue)
    return typeValue;
  }
  const getProvinces = () => {
    let typeSelect = document.getElementById("provinceSelect")
    const typeValue = typeSelect.options[typeSelect.selectedIndex].value;
    console.log('Object.prototype.toString.call(typeValue)<<', Object.prototype.toString.call(typeValue));
    // console.log("typeValue<<",typeValue.toString());
    setProvincename(typeValue)
    return typeValue;
  }


  useEffect(() => {
    getSelectDOM()
    getProvinces()
    // const typeValue = getSelectDOM()
    // setDataType(typeValue)
    //  console.log('useEffect/dataType<<',typeValue)
    getTrendChinaEchart(chinaMockData, dataType);
    // getLinerTrendChinaEchart();
  }, [chinaData, chinaMockData, dataType,provincename])


  const optionsNodes = provincesName.map(item => {
    return (
      <option key={item} value={item}>{item}</option>
    )
  })
  return (
    <div className='tendency_china' >
      <div className="settings">
      <div className="dataSel_box">
          <select id="provinceSelect" onChange={() => getProvinces()}>
            <option value={'china'}>选择省份/中国</option>
            {optionsNodes}
          </select>
        </div>
        <div className="dataSelect">
          {/* <label htmlFor="dataType_hsq" styles={{ fontSize:'1.5rem',color:'green'}}></label> */}
          <select ref={selectRef} id="dataType_hsq"
            onChange={() => getSelectDOM()}
          >
            <option value="currentConfirmedCount">选择数据</option>
            <option value="confirmedCount">累计确诊</option>
            <option value="curedCount">治愈人数</option>
            <option value="currentConfirmedCount">现有确诊</option>
            <option value="deadCount">死亡人数</option>
            <option value="suspectedCount">疑似病例</option>
          </select>
        </div>
      </div>
      <div id='china_dataShow' >
        <header>china_dataShow</header>
      </div>
      <div id='LinerTrendChinaEchart' >
        <header>LinerTrendChinaEchart</header>
      </div>
    </div>
  )
}

export default TrendChina
