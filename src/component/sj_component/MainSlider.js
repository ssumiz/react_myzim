import React from 'react';
import mainslider from '../../sass/sj/sj_slider.module.scss'
import swiper1 from '../../data/swiper1.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

const MainSlider = () => {
    return (
        <div className={`${mainslider.main_slider} d-flex`}>
            <Swiper pagination = {true} modules = {[Pagination]} className = {`${mainslider.myfirstswiper} col-4`}>
                {
                    swiper1.map((eee,iii)=>{
                        return(
                            <SwiperSlide className={`position-relative ${mainslider.firstslide}`}>
                                <img src={eee.mainimg} alt={eee.alt} className={`position-absolute`}></img>
                                <div>
                                    <h2>{eee.region}</h2>
                                    <h3>{eee.address}</h3>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
            <Swiper className={`col-8`}>

            </Swiper>
        </div>
    );
};

export default MainSlider;