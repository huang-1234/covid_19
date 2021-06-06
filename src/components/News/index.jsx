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
    return (
      <div className="news_box">
        <header key={item.pubDate}>
          <span>{item.infoSource}</span>
          <span> {transformTime(item.pubDate)} </span>
        </header>
        <div className="news_header">
          <a href={ item.sourceUrl }>
            {item.title}
          </a>
        </div>
        <div className="new_main">
          <span>
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
