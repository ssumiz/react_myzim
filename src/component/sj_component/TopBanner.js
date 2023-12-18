import React from 'react';
import cb from '../../sass/sj/sj.module.scss';

const TopBanner = () => {
    return (
        <div className={`${cb.CutBanner} d-flex justify-content-between align-items-center`}>
            <h2 className="m-0">새로운 회원가입 이벤트</h2>
            <div className={cb.rightmenu}>
                <a href="#">이벤트 확인하러 가기</a>
                <a href="#">
                    <span>이동</span>
                    <i className="bi bi-chevron-right"></i>
                </a>
            </div>
        </div>
    );
};

export default TopBanner;