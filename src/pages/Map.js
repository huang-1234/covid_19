import React from 'react'
import Header from '../components/Map/Header'
import Number from '../components/Map/Number'
import WorldMap from '../components/Map/WorldMap'
// import ChinaMap from '../components/Map/ChinaMap.jsx';

const Map = (props) => {
  const { foreignData, chinaData } = props
  return (
    <div className='brief'>
      <Header foreignData={foreignData} />
      <Number foreignData={foreignData} />
      {foreignData && chinaData ? (
        <WorldMap foreignData={foreignData} chinaData={chinaData} />
      ) : null}
    </div>
  )
}

export default Map
