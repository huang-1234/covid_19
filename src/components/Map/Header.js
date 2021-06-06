import React from 'react'
import '../../styles/Map/Header.less'

const Header = (props) => {
  const {foreignData} = props
  // console.log(typeof foreignData)
  return (
    <div className='brief_header'>
      <h2>Global Epidemic</h2>
      <p>globalStatis.lastUpdateTime - {foreignData ? foreignData.globalStatis.lastUpdateTime : ''}</p>
    </div>
  )
}

export default Header
