import React from 'react';
import Style from "../../sass/jh/Partner.module.scss"
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';

import Data from "../../data/data.json"



function Partner(props) {

    return (
        <div data-aos="fade-up" data-aos-duration="2000">
            <div id={Style.businessPartners} className=" mt-10 mb-10 " >
                <div className={`${Style.partnersTitle} mb-5`}>
                    <div className={Style.partnerLogo1}></div>
                    <h1 className="personalColorBold">마이짐 서비스와 협력하는 파트너사</h1>
                </div>

                {/* 상단 스와이퍼  */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    speed={5000}
                    autoHeight={true}
                    loopAdditionalSlides={1}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        stopOnLastSlide: false
                    }}

                    modules={[Autoplay]}
                    className={`PartnerSwiper container ${Style.swiperWrap}`}
                    dir="ltr"

                    wrapperClass={Style.swiperWrapper}
                >

                    {Data.partner_info.map((value, idx) => {
                        // partner_index 가 4보다 작은 데이터 들만 출력 
                        if (value.partner_index < 4) {
                            return (<SwiperSlide className={Style.swiperSlide} key={`Slide${idx}`} >
                                <img src={value.partner_img_src} alt={value.partner_name} className={Style.swiperSlide} />
                            </SwiperSlide>)
                        }

                    })
                    }

                    {Data.partner_info.map((value, idx) => {
                        // partner_index 가 4보다 작은 데이터 들만 출력 
                        if (value.partner_index < 4) {
                            return (<SwiperSlide className={Style.swiperSlide} key={`Slide${idx}`} >
                                <img src={value.partner_img_src} alt={value.partner_name} className={Style.swiperSlide} />
                            </SwiperSlide>)
                        }

                    })
                    }

                    {Data.partner_info.map((value, idx) => {
                        // partner_index 가 4보다 작은 데이터 들만 출력 
                        if (value.partner_index < 4) {
                            return (<SwiperSlide className={Style.swiperSlide} key={`Slide${idx}`} >
                                <img src={value.partner_img_src} alt={value.partner_name} className={Style.swiperSlide} />
                            </SwiperSlide>)
                        }

                    })
                    }
                </Swiper>

                {/* 하단 스와이퍼 */}

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    speed={5000}
                    autoHeight={true}
                    loopAdditionalSlides={1}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        stopOnLastSlide: false
                    }}

                    modules={[Autoplay]}
                    className={`PartnerSwiper container ${Style.swiperWrap}`}
                    dir="rtl"
                    wrapperClass={Style.swiperWrapper}
                >
                    <div className={Style.swiperWrap}>

                        {Data.partner_info.map((value, idx) => {
                            // partner_index 가 3보다 큰 데이터 들만 출력 
                            if (value.partner_index > 3) {
                                return (<SwiperSlide className={Style.swiperSlide} key={`Slide${idx}`} >
                                    <img src={value.partner_img_src} alt={value.partner_name} className={Style.swiperSlide} />
                                </SwiperSlide>)
                            }

                        })
                        }

                        {Data.partner_info.map((value, idx) => {
                            // partner_index 가 4보다 작은 데이터 들만 출력 
                            if (value.partner_index > 3) {
                                return (<SwiperSlide className={Style.swiperSlide} key={`Slide${idx}`} >
                                    <img src={value.partner_img_src} alt={value.partner_name} className={Style.swiperSlide} />
                                </SwiperSlide>)
                            }

                        })
                        }

                        {Data.partner_info.map((value, idx) => {
                            // partner_index 가 4보다 작은 데이터 들만 출력 
                            if (value.partner_index > 3) {
                                return (<SwiperSlide className={Style.swiperSlide} key={`Slide${idx}`} >
                                    <img src={value.partner_img_src} alt={value.partner_name} className={Style.swiperSlide} />
                                </SwiperSlide>)
                            }

                        })
                        }

                    </div>
                </Swiper>

            </div>
        </div>
    );
}

export default Partner;