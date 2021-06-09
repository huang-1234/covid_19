
import { provincesName } from '../mock/provincesName'


import china from "../mock/china/china"

import data0 from "../mock/china/北京市"
import data1 from "../mock/china/天津市"
import data2 from "../mock/china/河北省"
import data3 from "../mock/china/山西省"
import data4 from "../mock/china/内蒙古"
import data5 from "../mock/china/辽宁省"
import data6 from "../mock/china/吉林省"
import data7 from "../mock/china/黑龙江省"
import data8 from "../mock/china/上海市"
import data9 from "../mock/china/江苏省"
import data10 from "../mock/china/浙江省"
import data11 from "../mock/china/安徽省"
import data12 from "../mock/china/福建省"
import data13 from "../mock/china/江西省"
import data14 from "../mock/china/山东省"
import data15 from "../mock/china/河南省"
import data16 from "../mock/china/湖北省"
import data17 from "../mock/china/湖南省"
import data18 from "../mock/china/广东省"
import data19 from "../mock/china/广西"
import data20 from "../mock/china/海南省"
import data21 from "../mock/china/重庆市"
import data22 from "../mock/china/四川省"
import data23 from "../mock/china/贵州省"
import data24 from "../mock/china/云南省"
import data25 from "../mock/china/西藏"
import data26 from "../mock/china/陕西省"
import data27 from "../mock/china/甘肃省"
import data28 from "../mock/china/青海省"
import data29 from "../mock/china/宁夏"
import data30 from "../mock/china/新疆"
import data31 from "../mock/china/香港"
import data32 from "../mock/china/澳门"
import data33 from "../mock/china/台湾"


// export const getSelectProvinceData = (provincename) => {
  
// }


export const getSelectProvinceData = (provincename) => {
  let chinaMockData
  // 下面的if else一定要重写为switch
  if (provincesName[0] === provincename) {
    chinaMockData = data0.data;
  } else if (provincesName[1]===provincename) {
    chinaMockData = data1.data;
  } else if (provincesName[2]===provincename) {
    chinaMockData = data2.data;
  } else if (provincesName[3]===provincename) {
    chinaMockData = data3.data;
  } else if (provincesName[4]===provincename) {
    chinaMockData = data4.data;
  } else if (provincesName[5]===provincename) {
    chinaMockData = data5.data;
  } else if (provincesName[6]===provincename) {
    chinaMockData = data6.data;
  } else if (provincesName[7]===provincename) {
    chinaMockData = data7.data;
  } else if (provincesName[8]===provincename) {
    chinaMockData = data8.data;
  } else if (provincesName[9]===provincename) {
    chinaMockData = data9.data;
  } else if (provincesName[10]===provincename) {
    chinaMockData = data10.data;
  } else if (provincesName[11]===provincename) {
    chinaMockData = data11.data;
  } else if (provincesName[12]===provincename) {
    chinaMockData = data12.data;
  } else if (provincesName[13]===provincename) {
    chinaMockData = data13.data;
  } else if (provincesName[14]===provincename) {
    chinaMockData = data14.data;
  } else if (provincesName[15]===provincename) {
    chinaMockData = data15.data;
  } else if (provincesName[16]===provincename) {
    chinaMockData = data16.data;
  } else if (provincesName[17]===provincename) {
    chinaMockData = data17.data;
  } else if (provincesName[18]===provincename) {
    chinaMockData = data18.data;
  } else if (provincesName[19]===provincename) {
    chinaMockData = data19.data;
  } else if (provincesName[20]===provincename) {
    chinaMockData = data20.data;
  } else if (provincesName[21]===provincename) {
    chinaMockData = data21.data;
  } else if (provincesName[22]===provincename) {
    chinaMockData = data22.data;
  } else if (provincesName[23]===provincename) {
    chinaMockData = data23.data;
  } else if (provincesName[24]===provincename) {
    chinaMockData = data24.data;
  } else if (provincesName[25] === provincename) {
    chinaMockData = data25.data;
  } else if (provincesName[26] === provincename) {
    chinaMockData = data26.data;
  } else if (provincesName[26] === provincename) {
    chinaMockData = data26.data;
  } else if (provincesName[27] === provincename) {
    chinaMockData = data27.data;
  } else if (provincesName[28] === provincename) {
    chinaMockData = data28.data;
  } else if (provincesName[29] === provincename) {
    chinaMockData = data29.data;
  } else if (provincesName[30] === provincename) {
    chinaMockData = data30.data;
  } else if (provincesName[31] === provincename) {
    chinaMockData = data31.data;
  } else if (provincesName[32] === provincename) {
    chinaMockData = data32.data;
  } else if (provincesName[33] === provincename) {
    chinaMockData = data33.data;
  } else {
    chinaMockData = china.data;
  }
  return chinaMockData
}




















/* TrendChina.jsx
import china from "../../mock/china/china"

import data0 from "../../mock/china/北京市"
import data1 from "../../mock/china/天津市"
import data2 from "../../mock/china/河北省"
import data3 from "../../mock/china/山西省"
import data4 from "../../mock/china/内蒙古"
import data5 from "../../mock/china/辽宁省"
import data6 from "../../mock/china/吉林省"
import data7 from "../../mock/china/黑龙江省"
import data8 from "../../mock/china/上海市"
import data9 from "../../mock/china/江苏省"
import data10 from "../../mock/china/浙江省"
import data11 from "../../mock/china/安徽省"
import data12 from "../../mock/china/福建省"
import data13 from "../../mock/china/江西省"
import data14 from "../../mock/china/山东省"
import data15 from "../../mock/china/河南省"
import data16 from "../../mock/china/湖北省"
import data17 from "../../mock/china/湖南省"
import data18 from "../../mock/china/广东省"
import data19 from "../../mock/china/广西"
import data20 from "../../mock/china/海南省"
import data21 from "../../mock/china/重庆市"
import data22 from "../../mock/china/四川省"
import data23 from "../../mock/china/贵州省"
import data24 from "../../mock/china/云南省"
import data25 from "../../mock/china/西藏"
import data26 from "../../mock/china/陕西省"
import data27 from "../../mock/china/甘肃省"
import data28 from "../../mock/china/青海省"
import data29 from "../../mock/china/宁夏"
import data30 from "../../mock/china/新疆"
import data31 from "../../mock/china/香港"
import data32 from "../../mock/china/澳门"
import data33 from "../../mock/china/台湾"
 */