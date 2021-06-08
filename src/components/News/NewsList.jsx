import React,{useState, useEffect} from 'react'

import {transformTime} from '../util/Time'

import './news.css';

export default function ShowNewsList(props) {

  const [newslist, setNewslist] = useState(props.propsNewslist)
  
  useEffect(() => {
    setNewslist(props.propsNewslist)
  },[props.propsNewslist])
  //  console.log('ShowNewsList/newslist<<', newslist); // 检测售后接受到了数据
  const mathRandom = Math.random();
  const newslistNodes = newslist?.map((item) => {
    const formateTime = transformTime(parseInt(item.pubDate))
    return (
      <div className="news_box">
        <div key={mathRandom} className="news_header">
          <a key={item.sourceUrl +mathRandom} href={ item.sourceUrl } target="_blank" rel='noreferrer'>
            {item.title}
          </a>
        </div>
        <header key={item.pubDate + mathRandom} className="news_header">
          {/* <span>{item.infoSource}</span> */}
          <span>央视新闻林科大客户端 --</span>
          <span key={item.formateTime +mathRandom} className="news_time"> 时间：{ formateTime} </span>
        </header>
        <div className="new_main">
          <span key={item.summary}>
            {item.summary} 
          </span>
        </div>
      </div>
    )
  })

  return (
    <>
      {newslistNodes}
    </>
  )
}
