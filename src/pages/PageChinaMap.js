import React  from 'react'
import ChinaHeader from '../components/Map/ChinaHeader'
import ChinaNumber from '../components/Map/ChinaNumber'
import ChinaMap from '../components/Map/ChinaMap';

const PageChinaMap = (props) => {
  const { foreignData, chinaData } = props
  //  console.log(chinaData)
  return (
    <div className='brief'>
      <ChinaHeader chinaData={chinaData} />
      <ChinaNumber chinaData={chinaData} />

      
      {foreignData && chinaData ? (
        <ChinaMap  chinaData={chinaData} />
      ) : null}
    </div>
  )
}

export default PageChinaMap
