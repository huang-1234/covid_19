import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowNewsList from '../components/News/NewsList'
// import jsonData from '../mock/news/newslist.json';
export default function News(props) {

  const [newslist, setNewslist] = useState();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect( async function () {
    axios.get('/covid/news')
      .then((response) => {
        //  console.log('News/response.data<<', response.data)
        const results = response.data.results;
        setNewslist(results);
        //  console.log('News<<',newslist)
      })
      .catch ((err) => {
        console.log('newslist 获取失败',err)
      })
    // const results = jsonData.results;
    // setNewslist(results);
  },[newslist])
  //  console.log('News<<',newslist)

  return (
    <>
      <header>国内疫情最新新闻</header>
      <div className="new-containter">
        <ShowNewsList propsNewslist={ newslist}/>
      </div>
    </>
  )
}
