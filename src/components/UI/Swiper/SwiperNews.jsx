/* eslint-disable jsx-a11y/alt-text */
// Import Swiper React components
import React ,{ useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

import axios from 'axios';
import {transformTime} from '../../util/Time'
// Import Swiper styles
import 'swiper/swiper.less';
import './news.less'
export default function SwiperNews() {

  SwiperCore.use([EffectCoverflow,Pagination]);

  const [newslist, setNewslist] = useState(null);
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

  const mathRandom = Math.random();
  const newslistNodes = newslist?.map((item) => {
    const formateTime = transformTime(parseInt(item.pubDate))
    return (
      <SwiperSlide>
      <div className="news_box">
        <div key={mathRandom} className="news_header">
          <a key={item.sourceUrl +mathRandom} href={ item.sourceUrl } target="_blank" rel='noreferrer'>
            {item.title}
          </a>
        </div>
        <header key={item.pubDate + mathRandom} className="news_header">
          {/* <span>{item.infoSource}</span> */}
          <span>央视新闻林科大实时客户端 --</span>
          <span key={item.formateTime +mathRandom} className="news_time"> 时间：{ formateTime} </span>
        </header>
        <div className="new_main">
          <span key={item.summary}>
            {item.summary} 
          </span>
        </div>
        </div>
        </SwiperSlide>
    )
  })
  return (
    <div className="swiper_news_box">
      <header>国内疫情最新新闻</header>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }} pagination={{
          "clickable": true
        }} navigation={true}
      >
        {/* {newslistNodes} */}
      </Swiper>
      <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true,

      }}
        
        className="mySwiper">
        {/* <SwiperSlide><img src="/static/images/400/img4.jpg" /></SwiperSlide> */}
        {/* <SwiperSlide><img src="https://tuchong.com/18838226/86528690/?user_id=20826259" /></SwiperSlide> */}
        {newslistNodes}
        
        {/* <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide>
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide> */}
  </Swiper>
    </div>
  );
};