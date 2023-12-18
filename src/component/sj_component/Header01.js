import React from 'react';

import hd1 from '../sass/sj/sj_h1.module.scss';

const Header01 = () => {
    return (
        <div className={`${hd1.header1} border-bottom`}>
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className={`${hd1.logo} m-0`}><a href="#"><img src="/img/sj_img/logo.png" alt="logo" /></a></h1>
                <div className={`${hd1.hrmenu} d-flex`}>
                    <a href="#"><span>언어 선택</span>
                        <i class="bi bi-chevron-down"></i>
                    </a>
                    <a href="#">로그인</a>
                    <a href="#">회원가입</a>
                </div>
            </div>
        </div>
    );
};

export default Header01;