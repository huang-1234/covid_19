
import React, { useState, useEffect } from 'react';
import News from './pages/News'
import axios from 'axios'
import WorldMap from './pages/Map'
import PageChinaMap from './pages/PageChinaMap'
// import Trend from './pages/Trend'
import TrendChina from './pages/TrendChina'

import EpidemicChange from './pages/EpidemicChange';
// import TopTen from './pages/TopTen'
import styles from './App.less';

const App = (props) => {
  
  const [foreignData, setForeignData] = useState(null)
  const [chinaData, setChinaData] = useState(null)

  useEffect(() => {
    // let request = new XMLHttpRequest()
    // request.open('GET', '/foreign', true)
    // request.onreadystatechange = function () {
    //   if (request.readyState === 4 && request.status === 200) {
    //     let cnt = JSON.parse(request.responseText)
    //     console.log(JSON.parse(cnt.data))
    //     setForeignData(JSON.parse(cnt.data))
    //   }
    // }
    // request.send()
    axios.get('/covid/foreign').then((res) => {
      setForeignData(JSON.parse(res.data.data))
    })

    axios.get('/covid/china').then((res) => {
      setChinaData(JSON.parse(res.data.data))
    })
    // let request2 = new XMLHttpRequest()
    // request2.open('GET', '/china', true)
    // request2.onreadystatechange = function () {
    //   if (request.readyState === 4 && request.status === 200) {
    //     let cnt = JSON.parse(request2.responseText)
    //     console.log(JSON.parse(cnt.data))
    //     setChinaData(JSON.parse(cnt.data))
    //   }
    // }
    // request2.send()

  }, [])

  return (
    <div className="container">
      <WorldMap foreignData={foreignData} chinaData={chinaData} />
      
      <PageChinaMap className={styles.page_china_map} foreignData={foreignData} chinaData={chinaData} />

      
      {/* <Trend foreignData={foreignData} chinaData={chinaData} /> */}

      <TrendChina className={styles.trend_china} foreignData={foreignData} chinaData={chinaData} />

      <EpidemicChange className={styles.epidemic_change} />

      {/* {foreignData && chinaData ? <TopTen foreignData={foreignData} chinaData={chinaData} /> : null} */}
      
      <News className={styles.news}/>
    </div>
  )
}

export default App
