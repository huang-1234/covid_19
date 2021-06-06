import React,{useState, useEffect} from 'react'

import {transformTime} from '../util/Time'

import './news.css';

export default function ShowNewsList(props) {

  const [newslist, setNewslist] = useState(props.propsNewslist)
  
  useEffect(() => {
    setNewslist(props.propsNewslist)
  },[props.propsNewslist])
   console.log('ShowNewsList/newslist<<', newslist);

  const newslistNodes = newslist?.map((item) => {
    const formateTime = transformTime(parseInt(item.pubDate))
    return (
      <div className="news_box">
        <div className="news_header">
          <a key={item.sourceUrl} href={ item.sourceUrl } target="_blank" rel='noreferrer'>
            {item.title}
          </a>
        </div>
        <header key={item.pubDate} className="news_header">
          {/* <span>{item.infoSource}</span> */}
          <span>央视新闻客户端代理 --</span>
          <span key={item.formateTime} className="news_time"> 时间：{ formateTime} </span>
        </header>
        <div className="new_main">
          <span key={item.summary}>
            {item.summary} 
          </span>
        </div>
      </div>
    )
  })


  const style = {

  }
  return (
    <>
      {newslistNodes}
    </>
  )
}
