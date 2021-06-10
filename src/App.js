
import React, { useState, useEffect } from 'react';
import News from './pages/News'
import axios from 'axios'
import WorldMap from './pages/Map'
import PageChinaMap from './pages/PageChinaMap'
import Trend from './pages/Trend'
import TrendChina from './pages/TrendChina'

import EpidemicChange from './pages/EpidemicChange';
import TopTen from './pages/TopTen'
import styles from './App.less';

import SwiperNewList from './components/UI/Swiper/SwiperNews'

const App = (props) => {
  
  const [foreignData, setForeignData] = useState(null)
  const [chinaData, setChinaData] = useState(null)

  useEffect(() => {

    axios.get('/covid/foreign').then((res) => {
      setForeignData(JSON.parse(res.data.data))
    })

    axios.get('/covid/china').then((res) => {
      setChinaData(JSON.parse(res.data.data))
    })

  }, [])

  return (
    <div className="container">
      <SwiperNewList></SwiperNewList>
      <PageChinaMap className={styles.page_china_map} foreignData={foreignData} chinaData={chinaData} />

      
      <TrendChina className={styles.trend_china} foreignData={foreignData} chinaData={chinaData} />

      <EpidemicChange className={styles.epidemic_change} />

      
      
      <WorldMap className={styles.world_map} foreignData={foreignData} chinaData={chinaData} />
      
      <Trend className={styles.world_trend} foreignData={foreignData} chinaData={chinaData} />
      

      {foreignData && chinaData ? <TopTen foreignData={foreignData} chinaData={chinaData} /> : null}
      
      <News className={styles.news}/>
    </div>
  )
}

export default App
