import React, { useEffect, useState, useRef } from 'react'

import './TrendChina.less'

import { getTrendChinaEchart } from './TrendChinaEchart'
// import hubei from '../../mock/provinceData/湖南省';
// import china from '../../mock/worldData/中国'
import china from '../../mock/china/湖北省'


// import { Select } from 'antd';
// import 'antd/dist/antd.css';
// const { Option } = Select;




const TrendChina = (props) => {
  const chinaMockData = china.data
  const { chinaData } = props
  const [dataType, setDataType] = useState(null);

  const selectRef = useRef(null);

  const getSelectDOM = ()=>{
    // let typeSelect = document.querySelector("#dataType_hsq")
    let typeSelect = document.getElementById("dataType_hsq")
    // let typeSelect = ReactDOM.findDOMNode(select)
    // const typeSelect = selectRef.current;
    //  console.log('typeSelect<<',typeSelect)
    const selectIdx = typeSelect.selectedIndex;
    //  console.log('selectIdx<<', selectIdx)
    const typeValue = typeSelect.options[selectIdx].value; // 数据类型
    console.log('getSelectDOM/typeValue<<', typeValue);
    setDataType(typeValue)
    return typeValue;
  }

  useEffect(() => {
    //  console.log('chinaData<<', chinaData) 
    getSelectDOM()
    const typeValue = getSelectDOM()
    // setDataType(typeValue)
    console.log('useEffect/dataType<<',typeValue)
    getTrendChinaEchart(chinaMockData
      , typeValue
      )
  }, [chinaData, dataType])

  return (
    <div className='tendency_china' >
      <div className="dataType_select">
        <label for="dataType_hsq">choose dataType</label> <br />
        <select ref={selectRef} id="dataType_hsq"
          onChange={()=>getSelectDOM()}
        >
          <option value="">--Please choose an option--</option>
          <option value="confirmedCount">confirmedCount</option>
          <option value="curedCount">curedCount</option>
          <option value="currentConfirmedCount">currentConfirmedCount</option>
          <option value="deadCount">deadCount</option>
        </select>
      </div>
      <div id='china_dataShow' > </div>
    </div>
  )
}

export default TrendChina
