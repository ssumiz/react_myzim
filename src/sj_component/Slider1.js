import React from 'react';
import S1 from '../sass/sj_slider1.module.scss';
import SS1 from '../sass/sj_slider1.scss'
import dataswiper from '../data/swiper.json';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';

import 'swiper/css';

function Slider1(props) {
    return (
        <div className={`${S1.slider1} col-4`}>
            <Swiper navigation={true} modules={[Navigation]} className={S1.myfirstswiper}>
                {
                    dataswiper.map((el,idx)=>{
                        return(
                            <>
                                <SwiperSlide className={`position-relative`}>
                                    <img src={el.backgroundImg} alt={idx} className="position-absolute" />
                                    <div className={`${S1.pwrap} position-absolute`}>
                                     <h2>{el.backgroundContents[0]}</h2>
                                     <h3>{el.backgroundContents[1]}</h3>
                                    </div>
                                </SwiperSlide>
                            </>
                        );
                    })
                }
            </Swiper>
        </div>
    );
}

export default Slider1;