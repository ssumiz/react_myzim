import React from 'react';
import { useState,useEffect, useRef } from 'react';
import slidesass from '../../sass/sj/sj_slide.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Scrollbar } from 'swiper/modules';
import swiperdata from '../../data/swiper1.json';
import swiperdata2 from '../../data/swiper2.json';

const Slider = () => {

    const Paginate = {
        clickable: true,
        renderBullet: function (i,className) {
           return `<div class=${className}><div class="text-wrap"><div>${swiperdata2[i].swiper2text.split('/')[0]}</div><div>${swiperdata2[i].swiper2text.split('/')[1]}</div><div>${swiperdata2[i].swiper2text.split('/')[2]}</div></div></div>`
        },
    };

    
    return (
        <div className={`${slidesass.allswiper} d-flex`}>
            <Swiper dir="rtl" navigation={true} pagination={{clickable: true,}} modules={[Navigation,Pagination]} className={`${slidesass.swiper1} col-5`}>
                {
                    swiperdata.map((el,idx)=>{
                        return(
                            <SwiperSlide key={idx} className={`${slidesass.newswiperslide}` }>
                                <img src={el.mainimg} alt={el.alt}></img>
                                <div>
                                    <h2>{el.region}</h2>
                                    <h3>{el.address}</h3>              
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
            <div className={`${slidesass.swipertwo} col-7`}>
                <div className={`${slidesass.twotitle}`}>
                    <h2>PERSONA</h2>
                    <p>
                        제품이나 서비스를 사용할 만한 다양한 유형의 사용자
                    </p>
                </div>
                <Swiper effect={'fade'} scrollbar = {{hide:false,}} pagination={Paginate} modules={[EffectFade,Pagination,Scrollbar]} className={`${slidesass.swiper2} sjslider`}>                  
                    {
                        swiperdata2.map((ee,ii)=>{
                            return(
                                <div>
                                    <SwiperSlide key={ii} className={`${slidesass.swiper2slide}`}>
                                        <img src={ee.swiper2img} alt={ee.swiper2alt}></img>
                                    </SwiperSlide>
                                </div>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;