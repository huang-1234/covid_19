import React, { useState, useEffect } from "react";
import { EpidemicChangeEchart } from "./EpidemicChangeEchart.js";
import "../styles/pages/EpidemicChange.less";

export default function EpidemicChange() {
  const [dataSel, setDataSel] = useState(null);
  const [race, setRace] = useState(50000);

  useEffect(() => {
    getSelectData();
    getRace();
    EpidemicChangeEchart(dataSel, race);
  }, [dataSel, race]);

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
    console.log("getSelectData/typeValue<<", typeValue);
    setRace(typeValue);
    return typeValue;
  };

  return (
    <>
      <header>中国各个省份疫情演变图</header>
      <div className="settings">
        setting
        <div className="dataSel_box">
          <select id="raceSelect" onChange={() => getRace()}>
            <option value={5000}>选择省份</option>
            <option value={2500}>2倍数</option>
            <option value={1500}>3倍数</option>
            <option value={1000}>4倍数</option>
            <option value={500}>5倍数</option>
          </select>
        </div>
        <div className="dataSel_box">
          {/* <label htmlFor="dataSelect">数据选择</label>  */}
          <select id="dataSelect" onChange={() => getSelectData()}>
            <option value="0">请选择数据</option>
            <option value="0">总确诊人数</option>
            <option value="1">当前确诊人数</option>
            <option value="2">死亡人数</option>
            <option value="3">总治愈人数</option>
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
      </div>

      <div style={{ height: "90rem", margin: 0 }}>
        <div id="container" style={{ height: "100%", width: "100%" }}></div>
      </div>
    </>
  );
}
