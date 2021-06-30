import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import SwiperCore, {
  Pagination,Navigation,Autoplay
} from 'swiper/core';
import styles from './mystyle.module.css';

SwiperCore.use([Pagination,Navigation,Autoplay]);



function Carousel(){
  return (
  <div className={`mt-5 ${styles.grab} relative box-border px-0`}>
    <Swiper className="px-0 mx-0 box-border" slidesPerView={1} centeredSlides={true} autoplay={{"delay": 5000,"disableOnInteraction": false}} spaceBetween={30} loop={true} pagination={{"clickable": true}} navigation={false} className="mySwiper">
      <SwiperSlide className="px-0 mx-0 box-border">
        <img src="https://shoplane.netlify.app/img/img1.png" alt="1"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://shoplane.netlify.app/img/img2.png" alt="2"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src="https://shoplane.netlify.app/img/img3.png" alt="3"/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://shoplane.netlify.app/img/img4.png" alt="4"/>
      </SwiperSlide>
    </Swiper>
  <div className={`absolute top-0 right-0 ${styles.stop2} opacity-40 h-full  z-20`}/>
  <div className={`absolute top-0 left-0 ${styles.stop1} opacity-40 h-full z-20`}/>
  </div>
  )
}


export default Carousel;
