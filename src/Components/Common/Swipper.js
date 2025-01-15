import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation,Pagination,EffectFade,EffectCube,EffectCoverflow,EffectFlip,EffectCards} from 'swiper/modules';
import SweeperCard from './SweeperCard';


const Swipper = ({slider,pagination,autoplay,navigation,effectStyle}) => {


  const autoplayOptions =autoplay? {
    delay: 2500,
    disableOnInteraction: false,

  }:false;

    return (
        <div>
         <Swiper
          effect={effectStyle}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={autoplayOptions}
        pagination={pagination}
        navigation={navigation}
        modules={[Autoplay, Navigation,Pagination,EffectFade,EffectCube,EffectCoverflow,EffectFlip,EffectCards]}
      key={autoplay}
        className="mySwiper custom-slide"
      >
        {
          slider.map((item, index) => (
            <SwiperSlide  key={index}>
              <SweeperCard item={item}></SweeperCard>
            </SwiperSlide>
          ))
        }
      </Swiper>
  
  
            
        </div>
    );
};

export default Swipper;