import React from 'react';

function End(props) {
    return (
    <div id="footer">
        <div class="container">
            <div class="footer posRel d-flex jcb aic ">
                <div class="companyInfo">
                    <ul>
                        <li class="companyName">주식회사 마이짐</li>
                        
                        <li>대표: 손흥민</li>
                        <li>경기도 성남시 수정구 분당로 에이빌딩 2F</li>
                        <li>통신판매업신고: 2023-성남수정-0137호</li>
                        <li>사업자등록 번호: 534-484-10888</li>
                        <li class="termOfUse">이용약관 개인정보처리(취급)방침</li>
                    </ul>
                </div>
                <div class="customerService">
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/watch?v=vRomwF-YOc0" target="_blank">
                                <i class="bi bi-youtube"></i></a>
                            <a href="https://twitter.com/?lang=ko"
                                    target="_blank"><i class="bi bi-twitter"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i
                                        class="bi bi-instagram"></i></a>
                        </li>
                        <li class="csCenter">고객센터</li>
                        <li class="csNumber">1566-5516</li>
                        <li class="hoursOfUse">평일 09:00~18:00
                            주말/공휴일 07:00~19:00
                            Copyright <i class="bi bi-c-circle"></i> MYZIM Corp.All Rights Reserved</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
};

export default End;