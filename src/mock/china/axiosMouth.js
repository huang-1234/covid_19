const axios = require('axios')

const getMouthTime = (mouthTime) => {
  return (mouthTime - (mouthTime % 100)) / 100
}

const getAllMouthDate = async () => {
  const res = await axios.get('https://ncov.dxy.cn/ncovh5/view/pneumonia')
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
  for (let i = 0; i < data.length; i++) {
    const cnt = await getProvinceData(data[i])
    // console.log(cnt);
    for (let i = 0 ; i < cnt.length ; i++) {
      const cntItem = cnt[i];
      const cntAns = [];
      for (let item in cntItem) {
        cntAns.push(cntItem[item]);
      }
      ans.data.push(cntAns);
      ans.code = 'success';
    }
  }
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
    if (l == r) {
      proStr = getMouthTime(data[l].dateId)
    }
    if (getMouthTime(data[r].dateId) == proStr) {
      r++
    } else {
      const cnt = data.slice(l, r)
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

getAllMouthDate()
