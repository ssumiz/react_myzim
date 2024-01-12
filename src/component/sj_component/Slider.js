import React , { useState, useEffect }from 'react';
import slidesass from '../../sass/sj/sj_slide.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Scrollbar } from 'swiper/modules';
import { Controller } from 'swiper/modules';
import swiperdata from '../../data/swiper1.json';
import swiperdata2 from '../../data/swiper2.json';

const { kakao } = window;

const Slider = () => {
function Kakao() {

    useEffect(()=> {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701,126.570667),
            level: 3
        };
        const map = new kakao.maps.Map(container,options);
    },[])
}
    const [controlledSwiper,setcontrolledSwiper] = useState(null);

    const Paginate = {
        clickable: true,
        renderBullet: function (i,className) {
           return `<div class="${className}">
                    <div class="text-wrap">
                        <div>${swiperdata2[i].swiper2text.split('/')[0]}</div>
                        <div>${swiperdata2[i].swiper2text.split('/')[1]}</div>
                        <div>${swiperdata2[i].swiper2text.split('/')[2]}</div>
                    </div>
                  </div>`
        }
    };

    
    return (
        <div className={`${slidesass.allswiper} d-flex firstslide`}>
            <div className={`${slidesass.swiperone} col-5 d-flex`}>
                <Swiper navigation={true} modules={[Navigation,Controller,Pagination]} className={`${slidesass.swiperoneswiper} col-6 swiper11`} controller={{control:controlledSwiper}}>
                    {
                        swiperdata.map((첫,둘)=>{
                            return(
                                <>
                                    <SwiperSlide key={둘} className={`${slidesass.swiperoneslide}`}>
                                        <img src={첫.mainimg} alt={첫.alt}></img>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
                <Swiper className={`${slidesass.swiperoneto} onlyswiper`} modules={[Pagination,Controller]} onSwiper={setcontrolledSwiper}>
                    {
                        swiperdata.map((셋,넷)=>{
                            return(
                                <>
                                    <SwiperSlide key={넷} className={`${slidesass.swiperonetoslide}`}>
                                        <div className={`${slidesass.texterwrap}`}>
                                            <h2>{셋.region}</h2>
                                            <p>{셋.address}</p>
                                        </div>
                                        <div id="map" style={{width:'500px', height:'500px'}}></div>
                                    </SwiperSlide>
                                </>
                            )
                        })
                    }
                </Swiper>
            </div>
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