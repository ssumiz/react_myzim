import React, { useState } from 'react';

import Style from "../../sass/jh/SizeInfo.module.scss"
import "../../sass/jh/SizeInfo.scss"

import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import Data from "../../data/data.json"

function SizeInfo(props) {

    const [activeIdx, setIdx] = useState(0);



    const pagination = {
        clickable: true,

        renderBullet: function (i, className) {
            return '<span class="' + className + '">' + (Data.size_info[i].size_name) + '</span>';
        },
    };

    return (
        <div id="sizeInfo">
            <div className={`container mb-5 mt-5 ${Style.containerHeight}`}>
                <div className="text-center pt-5">
                    <h1 className="personalColorBold">사이즈 안내</h1>
                    <p className="mt-3">가장 적합한 사이즈를 선택해보세요.</p>
                </div>
                <div className={`d-flex justify-content-center ${Style.swiperHeight}`}>
                    <Swiper

                        centeredSlides={true}
                        spaceBetween={50}
                        loop={true}
                        slidesPerView={1}
                        speed={5000}
                        autoHeight={true}
                        loopAdditionalSlides={1}

                        effect="fade"

                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            stopOnLastSlide: false
                        }}

                        pagination={pagination}
                        modules={[Autoplay, EffectFade, Pagination]}
                        className={`{Style.swiper} fade-transition-hidden`}
                    >

                        {Data.size_info.map((value, idx) => {
                            // Mini , Small , Medium , Large
                            return (<SwiperSlide className={`{Style.swiperSlide} fade-transition`} key={`Slide${idx}`} >
                                <img src={value.size_img_src} alt={""} className={Style.swiperSlide} />
                            </SwiperSlide>)


                        })
                        }

                    </Swiper>
                    <div>
                        <button></button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default SizeInfo;