import React from 'react'
// import Header from '../components/Trend/Header'
import TrendTableChina from '../components/Trend/TrendChina.jsx'

const TrendChina = (props) => {
  const { chinaData } = props
  console.log('TrendChina/chinaData<<', chinaData)
  return (
    <div>
      <header>中国疫情趋势</header>
      {chinaData ? ( <TrendTableChina  chinaData={chinaData} /> ) : null}
    </div>
  )
}

export default TrendChina
