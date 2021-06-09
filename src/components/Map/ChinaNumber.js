import React  from 'react'
import '../../styles/Map/Number.less'
const Number = (props) => {
  const { chinaData } = props 
  //  console.log('Number/chinaData<<\n', chinaData)
  return (
    <div className='brief_body'>
      <div className='number'>
        <div className="number1">{chinaData ? chinaData.chinaTotal.confirm : ''}</div>
        <div className="text">累计确诊/confirm</div>
        <div className="more1">最近+{chinaData ? chinaData.chinaAdd.confirm : ''}</div>
      </div>
      <div className='number'>
        <div className="number2">{chinaData ? chinaData.chinaTotal.nowConfirm : ''}</div>
        <div className="text">现有确诊/nowConfirm</div>
        <div className="more2">最近+{chinaData ? chinaData.chinaAdd.nowConfirm : ''}</div>
      </div>
      <div className='number'>
        <div className="number3">{chinaData ? chinaData.chinaTotal.dead : ''}</div>
        <div className="text">死亡人数/dead</div>
        <div className="more3">最近+{chinaData ? chinaData.chinaAdd.dead : ''}</div>
      </div>
      <div className='number'>
        <div className="number3">{chinaData ? chinaData.chinaTotal.importedCase : ''}</div>
        <div className="text">境外输入/importedCase</div>
        <div className="more3">最近+{chinaData ? chinaData.chinaAdd.importedCase : ''}</div>
      </div>
      <div className='number'>
        <div className="number4">{chinaData ? chinaData.chinaTotal.heal : ''}</div>
        <div className="text">治愈人数/heal</div>
        <div className="more4">最近+{chinaData ? chinaData.chinaAdd.healAdd : ''}</div>
      </div>
    </div>
  )
}

export default Number
