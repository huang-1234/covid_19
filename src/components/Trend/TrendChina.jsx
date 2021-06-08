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
  const [dataType, setDataType] = useState('currentConfirmedCount');

  const selectRef = useRef(null);

  const getSelectDOM = () => {
    // let typeSelect = document.querySelector("#dataType_hsq")
    let typeSelect = document.getElementById("dataType_hsq")
    // let typeSelect = ReactDOM.findDOMNode(select)
    // const typeSelect = selectRef.current;
    //  console.log('typeSelect<<',typeSelect)
    const selectIdx = typeSelect.selectedIndex;
    //  console.log('selectIdx<<', selectIdx)
    const typeValue = typeSelect.options[selectIdx].value; // 数据类型
    //  console.log('getSelectDOM/typeValue<<', typeValue);
    setDataType(typeValue)
    return typeValue;
  }

  useEffect(() => {
    getSelectDOM()
    // const typeValue = getSelectDOM()
    // setDataType(typeValue)
    //  console.log('useEffect/dataType<<',typeValue)
    getTrendChinaEchart(chinaMockData
      , dataType
    )
  }, [chinaData, chinaMockData, dataType])

  return (
    <div className='tendency_china' >
      <div className="settings">
        <div className="dataSelect">
          {/* <label htmlFor="dataType_hsq" styles={{ fontSize:'1.5rem',color:'green'}}></label> */}
          <select ref={selectRef} id="dataType_hsq"
            onChange={() => getSelectDOM()}
          >
            <option value="currentConfirmedCount">请选择数据</option>
            <option value="confirmedCount">总确诊人数</option>
            <option value="curedCount">总治愈人数</option>
            <option value="currentConfirmedCount">当前确诊人数</option>
            <option value="deadCount">死亡人数</option>
          </select>
        </div>
      </div>
      <div id='china_dataShow' > </div>
    </div>
  )
}

export default TrendChina
