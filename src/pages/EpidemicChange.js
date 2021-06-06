import React,{useEffect} from 'react'
import { EpidemicChangeEchart } from './EpidemicChangeEchart.js';
export default function EpidemicChange() {

  useEffect(() => {
    EpidemicChangeEchart();
  }, []);

  return (
    <>
      <header style={{fontSize:'3rem',marginTop:'3rem'}}>中国各个省份疫情变化趋势图</header>
      <div style={{height: '50rem', margin: 0}}>
        <div id="container" style={{height: '100%',width: '100%'}}>
        </div>
      </div>
    </>
  )
}
