import React, { useState, useEffect } from "react";
import { EpidemicChangeEchart } from "./EpidemicChangeEchart.js";
// import {provincesName} from '../mock/provincesName'
import "../styles/pages/EpidemicChange.less";
import jsonData from  '../mock/china/ProvincesMonthData.json'

export default function EpidemicChange() {

  // const [settingIsShow, setSettingIsShow] = useState(null)  // 设置按钮隐藏和显示
  const [dataSel, setDataSel] = useState(null);  // 选择的数据的类型
  const [race, setRace] = useState(50000);  // 默认为50秒
  const [provinceCount, setProvinceCount] = useState(10)

  useEffect(() => {
    getSelectData();
    getRace();
    getProvinceCount()
    EpidemicChangeEchart(dataSel, race,provinceCount,jsonData.data);
  }, [dataSel, race, provinceCount]);


  const getSelectData = () => {
    let typeSelect = document.getElementById("dataSelect");
    const typeValue = typeSelect.options[typeSelect.selectedIndex].value; // 数据类型
    //  console.log('getSelectData/typeValue<<', typeValue);
    setDataSel(typeValue);
    return typeValue;
  };

  const getRace = () => {
    let typeSelect = document.getElementById("raceSelect");
    //  console.log('typeSelect<<',typeSelect)
    const typeValue = typeSelect.options[typeSelect.selectedIndex].value; // 数据类型
    //  console.log("getRace/typeValue<<", typeValue);
    setRace(typeValue);
    return typeValue;
  };
  
  const getProvinceCount = () => {
    let typeSelect = document.getElementById("provinceCountSelect");
    //  console.log('typeSelect<<',typeSelect)
    const typeValue = typeSelect.options[typeSelect.selectedIndex].value; // 数据类型
     console.log("getProvinceCount/typeValue<<", typeValue);
    setProvinceCount(typeValue);
    return typeValue;
  };


  return (
    <>
      <header>中国各个省份疫情演变图</header>
      <div className="settings">setting
        <div className="dataSel_box">
          {/* <label htmlFor="dataSelect">数据选择</label>  */}
          <select id="dataSelect" onChange={() => getSelectData()}>
            <option value={0}>选择数据</option>
            <option value={0}>累计确诊</option>
            <option value={1}>现有确诊</option>
            <option value={2}>死亡人数</option>
            <option value={3}>治愈人数</option>
          </select>
        </div>
        <div className="dataSel_box">
          <select id="raceSelect" onChange={() => getRace()}>
            <option value={5000}>1倍数</option>
            <option value={2500}>2倍数</option>
            <option value={1500}>3倍数</option>
            <option value={1000}>4倍数</option>
            <option value={500}>5倍数</option>
          </select>
        </div>

        <div className="dataSel_box">
          <select id="provinceCountSelect" onChange={() => getProvinceCount()}>
            <option value={10}>省份个数/10</option>
            <option value={34}>全部</option>
            <option value={10}>10</option>
          </select>
        </div>
      </div>

      <div style={{ height: "90rem", margin: 0 }}>
        <div id="container" style={{ height: "100%", width: "100%" }}></div>
      </div>
    </>
  );
}
