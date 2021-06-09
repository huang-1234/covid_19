import React from 'react'
import '../../styles/Map/Header.less'

const ChinaHeader = (props) => {
  const {chinaData} = props
  // console.log(typeof foreignData)
  return (
    <div className='brief_header'>
      <h2>China Epidemic/中国疫情</h2>
      <p>lastUpdateTime - {chinaData ? chinaData.lastUpdateTime : ''}</p>
    </div>
  )
}

export default ChinaHeader
