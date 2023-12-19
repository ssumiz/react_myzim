import React, { useEffect } from 'react';
import Style from "../../sass/jh/End.module.scss"
import { Instagram, Twitter, Youtube } from "react-bootstrap-icons"

import AOS from 'aos';
import 'aos/dist/aos.css';


function End(props) {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div id={Style.footer} className="mt-5" data-aos="fade-top"
            data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
            <div className="container">
                <div className={` ${Style.footer} position-relative d-flex justify-content-between align-items-center `}>
                    <div className={Style.companyInfo}>
                        <ul>
                            <li className={`${Style.companyName} personalColor`}>MYZIM</li>

                            <li>대표: 손흥민</li>
                            <li>경기도 성남시 수정구 분당로 에이빌딩 2F</li>
                            <li>통신판매업신고: 2023-성남수정-0137호</li>
                            <li>사업자등록 번호: 534-484-10888</li>
                            <li className={Style.termOfUse}>이용약관 개인정보처리(취급)방침</li>
                        </ul>
                    </div>
                    <div className={Style.customerService}>
                        <ul>

                            <li>
                                <a href="https://www.youtube.com/watch?v=vRomwF-YOc0" target="_blank" className="me-2">
                                    <Youtube color="red" size="25px"></Youtube>
                                </a>
                                <a href="https://twitter.com/?lang=ko" target="_blank" className="me-2">
                                    <Twitter color="#B8FBFF" size="25px"></Twitter>
                                </a>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <Instagram color="#F56040" size="25px"></Instagram>
                                </a>
                            </li>
                            <li className={Style.csCenter}>고객센터</li>
                            <li className={`${Style.csNumber} personalColor`}>1566-5516</li>
                            <li className={Style.hoursOfUse}>평일 09:00~18:00</li>
                            <li >주말/공휴일 07:00~19:00</li>
                            <li >Copyright <i className="bi bi-c-circle"></i> MYZIM Corp.All Rights Reserved</li>

                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default End;