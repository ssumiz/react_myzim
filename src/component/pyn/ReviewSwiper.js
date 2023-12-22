import React, { useRef, useState, useEffect } from 'react';
import use from '../../data/data.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

import style from '../../sass/yn/review.module.scss'
import '../../sass/yn/review.scss'
// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
    const [review, setreview] = useState(0);
    return (
        <>
            <div className={`${style.reviewBanner} ${style.rel} mtb-15`} data-aos="fade-up" data-aos-duration="3000">
                <div className={style.txt_set}>
                    <h1 className="personalColorBold mb-10">보관 사이즈별 실제 이용후기.
                    </h1>
                </div>
                <div className={style.background}></div>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                    className={`${style.reviewBanner}`}
                >


                    {
                        use.user_review.map((v, i) => {
                            return (
                                <SwiperSlide>
                                    <div className={`${style.swiper_slide} d-flex justify-content-center pt-5 pt-md-0 flex-md-row flex-column`}>
                                        <img src={v.review_img_src} alt="" />
                                        <div className={`${style.tbox_right} art`}>
                                            <div className={`${style.basic_slide_list} bg-white`}>
                                                <div className='tag_zone'>
                                                    <span className={style.tag}>{v.review_hashtag}</span>
                                                </div>
                                                <div className={`${style.title1} title0`}>
                                                    {v.review_title}
                                                </div>
                                                <div className={style.typo}>
                                                    {v.review_detail} <br />
                                                    {v.review_detail2}
                                                </div>
                                                <div className={`${style.info_wrap} d-flex`}>
                                                    <p>{v.user_id}</p>
                                                    ㅣ
                                                    <p>{use.branch_info.map((e, i) => e.branch_number === v.branch_number ? e.branch_name : null)}</p>
                                                    ㅣ
                                                    <p>{v.size_name}</p>
                                                    ㅣ
                                                    <p>{v.review_write_date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }



                </Swiper>
                <div className={style.btns}>
                    <div className={`${style.p_unset} swiper-pagination`}></div>
                    <a href="#none" title='더보기'>
                        <i className='bi bi-plus-lg'></i>
                    </a>
                </div>
                <button className={`${style.tbox_right} all review_btn`}>
                    <p className={style.title0}>
                        VIEW MORE
                    </p>
                    <p className={style.typo}>
                        편안창고의 다양한 사이즈 별
                        <br />
                        실제 이용 후기를
                        <br />
                        더욱 자세하게 알아보세요.
                    </p>
                </button>
            </div>
        </>
    );
}
