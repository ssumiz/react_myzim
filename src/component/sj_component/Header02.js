import React from 'react';

import H2 from '../sass/sj/sj_h2.module.scss';

const Header02 = () => {
    return (
        <div className={`${H2.header2} border-bottom py-4`}>
            <div className="container">
                <ul id={`${H2.gnb}`} className="d-flex justify-content-center align-items-center m-0">
                    <li className={H2.menu}><a href="#">회사 소개</a>
                        <ul className={H2.smenu}>
                            <li><a href="#">인삿말</a></li>
                            <li><a href="#">사업소개</a></li>
                        </ul>
                    </li>
                    <li className={H2.menu}><a href="#">사용 방법</a></li>
                    <li className={H2.menu}><a href="#">이벤트</a></li>
                    <li className={H2.menu}><a href="#">리뷰</a></li>
                    <li className={H2.menu}><a href="#">고객센터</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header02;