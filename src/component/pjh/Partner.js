import React from 'react';
import Style from "../../sass/jh/Partner.module.scss"

function Partner(props) {
    return (
        <div>
            <div id="businessPartners">
                <div class="partnersTitle">
                    <h1>마이짐 서비스와 협력하는 파트너사</h1>
                </div>
                <div class="container swiper " dir="ltr">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide partnerLogo1"></div>
                        <div class="swiper-slide partnerLogo2"></div>
                        <div class="swiper-slide partnerLogo3"></div>

                        <div class="swiper-slide partnerLogo1"></div>
                        <div class="swiper-slide partnerLogo2"></div>
                        <div class="swiper-slide partnerLogo3"></div>

                        <div class="swiper-slide partnerLogo1"></div>
                        <div class="swiper-slide partnerLogo2"></div>
                        <div class="swiper-slide partnerLogo3"></div>

                        <div class="swiper-slide partnerLogo1"></div>
                        <div class="swiper-slide partnerLogo2"></div>
                        <div class="swiper-slide partnerLogo3"></div>

                    </div>
                </div>
                <div class="container swiper dirRight" dir="rtl">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide partnerLogo4"></div>
                        <div class="swiper-slide partnerLogo5"></div>
                        <div class="swiper-slide partnerLogo6"></div>

                        <div class="swiper-slide partnerLogo4"></div>
                        <div class="swiper-slide partnerLogo5"></div>
                        <div class="swiper-slide partnerLogo6"></div>

                        <div class="swiper-slide partnerLogo4"></div>
                        <div class="swiper-slide partnerLogo5"></div>
                        <div class="swiper-slide partnerLogo6"></div>

                        <div class="swiper-slide partnerLogo4"></div>
                        <div class="swiper-slide partnerLogo5"></div>
                        <div class="swiper-slide partnerLogo6"></div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partner;