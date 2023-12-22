import React, { useState } from 'react';

import Style from "../../sass/jh/SizeInfo.module.scss"
import "../../sass/jh/SizeInfo.scss"

import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import { CaretRightFill } from 'react-bootstrap-icons';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

import Data from "../../data/data.json"

function SizeInfo(props) {

    const [activeIdx, setIdx] = useState(0);

    const handleSlideChange = (Swiper) => {
        setIdx(Swiper.realIndex);
        console.log(activeIdx);
    }

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
                    <p className="mt-3 mb-5">가장 적합한 사이즈를 선택해보세요.</p>
                </div>
                <div className={`d-flex justify-content-center ${Style.swiperHeight}`}>
                    <Swiper

                        centeredSlides={true}
                        spaceBetween={50}
                        loop={true}
                        slidesPerView={1}
                        // speed={5000}
                        autoHeight={true}
                        loopAdditionalSlides={1}

                        effect={"fade"}
                        fadeEffect={{
                            crossFade: false, // Enable cross fade transition
                        }}

                        onSlideChange={handleSlideChange}


                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            stopOnLastSlide: false
                        }}

                        pagination={pagination}
                        modules={[Autoplay, EffectFade, Pagination]}
                        className={`${Style.swiper}`}
                    >

                        {Data.size_info.map((value, idx) => {
                            // Mini , Small , Medium , Large
                            return (<SwiperSlide className={`{Style.swiperSlide} fade-transition`} key={`Slide${idx}`} >
                                <img src={value.size_img_src} alt={""} className={Style.swiperSlide} />
                            </SwiperSlide>)


                        })
                        }

                    </Swiper>

                    <div className="position-absolute d-flex flex-column align-items-center pt-5 dataPos">

                        <ul className="pt-3 fs-5">
                            <li className="mb-5">
                                <span className="subject col-5 me-5"><CaretRightFill></CaretRightFill> 사이즈명 </span>
                                <span className="subject__con col-7">{Data.size_info[activeIdx].size_name}</span>
                            </li>
                            <li className="mb-5">
                                <span className="subject col-5 me-5"><CaretRightFill></CaretRightFill> 용도 </span>
                                <span className="subject__con col-7">{Data.size_info[activeIdx].size_purpose}</span>
                            </li>
                            <li className="mb-5">
                                <span className="subject col-5 me-5"><CaretRightFill></CaretRightFill> 가격 </span>
                                <span className="subject__con col-7">{Data.size_info[activeIdx].size_price}</span>
                            </li>
                            <li className="mb-5">
                                <span className="subject col-5 me-5"><CaretRightFill></CaretRightFill> 구성 </span>
                                <span className="subject__con col-7">{Data.size_info[activeIdx].size_explain}</span>
                            </li>
                        </ul>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default SizeInfo;