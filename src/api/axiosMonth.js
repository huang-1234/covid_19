const axios = require('axios')
const {dataUrl} = require('./config')
const getMouthTime = (mouthTime) => {
  return (mouthTime - (mouthTime % 100)) / 100
}

const getAllMouthDate = async () => {
  const res = await axios.get(dataUrl.chinaHistoryDataUrl)
  const re =
    /.*try { window.getAreaStat = (.*)}catch\(e\){}<\/script><script id="getListByCountryTypeService2true">.*/
  const strOfHtml = res.data.match(re)
  const data = JSON.parse(strOfHtml[1])
  const ans = {
    code: '',
    data: [
      ['confirm', 'nowConfirm', 'dead', 'heal', 'chinaProvince', 'mouthTime']
    ],
  };
  const provinceAllData = []
  for (let i = 0; i < data.length; i++) {
    const cnt = await getProvinceData(data[i])
    // console.log(cnt);
    for (let i = 0 ; i < cnt.length ; i++) {
      const cntItem = cnt[i];
      const cntAns = [];
      for (let item in cntItem) {
        cntAns.push(cntItem[item]);
      }
      provinceAllData.push(cntAns);
      ans.code = 'success';
    }
  }
  provinceAllData.sort((a, b) => {
    const val1 = a[5];
    const val2 = b[5];
    const name1 = a[4];
    const name2 = b[4];
    if(val1 < val2) {
      return -1
    } else if(val1 === val2) {
      if(name1 < name2) return -1;
      else return 1;
    } else {
      return 1;
    }
  })
  for(let i = 0 ; i < provinceAllData.length ; i++) {
    ans.data.push(provinceAllData[i]);
  }
  console.log(ans);
  return ans;
}

const getProvinceData = async (province) => {
  const provinceName = province.provinceName
  const res = await axios.get(province.statisticsData)
  // console.log(res)
  const { data } = res.data
  const ans = []
  let l = 0,
    r = 0,
    proStr = 0
  while (r < data.length) {
    if (l === r) {
      proStr = getMouthTime(data[l].dateId)
    }
    if (getMouthTime(data[r].dateId) === proStr) {
      r++
    } else {
      const cnt = data.slice(r-1, r)
      const mouthData = getCount(cnt, proStr, provinceName)
      ans.push(mouthData)
      l = r
    }
  }
  return ans;
}

const getCount = (data, mouthTime, provinceName) => {
  let confirm = 0,
    nowConfirm = 0,
    dead = 0,
    heal = 0
  for (let i = 0; i < data.length; i++) {
    confirm += data[i].confirmedCount
    nowConfirm += data[i].currentConfirmedCount
    dead += data[i].deadCount
    heal += data[i].curedCount
  }
  return {
    confirm,
    nowConfirm,
    dead,
    heal,
    chinaProvince: provinceName,
    mouthTime,
  }
}

// getAllMouthDate();
module.exports = {
  getAllMouthDate
}
