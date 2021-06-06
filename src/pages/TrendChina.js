import React from 'react'
// import Header from '../components/Trend/Header'
import TrendTableChina from '../components/Trend/TrendTableChina'

const TrendChina = (props) => {
  const {foreignData, chinaData} = props
  return (
    <div>
      <header>中国疫情趋势</header>
      {foreignData && chinaData ? ( <TrendTableChina foreignData={foreignData} chinaData={chinaData} /> ) : null}
    </div>
  )
}

export default TrendChina
