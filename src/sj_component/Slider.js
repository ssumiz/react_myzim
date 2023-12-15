import { useRef, useState } from 'react';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import swiper from '../data/swiper.json'
import slide from '../sass/sj_slide.scss'

function Slider() {

    return (
        <div class="swiper">
            <Swiper modules={Navigation} navigation = {true}>
                {
                    swiper.map((el,idx)=>{
                        let newsplit=[];

                        return(
                           <SwiperSlide key={idx} >
                            <img src={el.backgroundImg} style={{"width":"100%","height":"100%","object-fit":"cover"}}></img>
                           </SwiperSlide>
                        );
                    })
                }      
            </Swiper>
        </div>
    )
}

export default Slider
