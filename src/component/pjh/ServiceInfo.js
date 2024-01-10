import React from 'react';

import Style from "../../sass/jh/ServiceInfo.module.scss"


function ServiceInfo(props) {
    return (
        <div>
            <div className={Style.Main} >
                {/* <img src="/img/pjh/serviceInfo/Main.png" alt="" /> */}
                <div className={`${Style.MainImg}`} src="https://cdn.myzzym.com/myzzym/images/home/header/myzzym-main.jpg" alt="" />                        
            </div>
            
            <div className={`${Style.index} mt-5 mb-5 p-3`} data-aos="fade-up" data-aos-duration="2000">
                <p className='mt-5 mb-5'>|   MYZIM STORAGE   |</p>
                <h2 className='mt-3 mb-5' style={{color:"#0091ff"}}>1년을 보관해도 쾌적한 <br/> 프리미엄 개인 창고</h2>
                <h5>소중한 물품을 장기간 안전하게 보관할 수 있도록</h5>
                <h5 style={{color:"#0091ff"}}>국립중앙박물관, 국립현대미술관, 삼성미술관 등</h5>
                <h5>전세계 1천여개 Museum 을 만들어온 검증된 기술로 </h5>
                <h5>프리미엄 개인창고를 만들었습니다. </h5>
                <h5 className='mb-5'>편리하고 안전한 공유형 개인창고  마이짐</h5>
            </div>

            <div className={`${Style.explain}`} data-aos="fade-up" data-aos-duration="2000">
                <h2 className={`${Style.styleH2} mt-5`}>짐 보관이 필요한 순간, 마이짐에게 믿고 맡기세요.</h2>
                <span className="mt-3 mb-5">쉬운 이용 방법으로 내 삶의 공간을 확장시키세요.</span>
                <ul className="mt-3 mb-5">
                    <li className={Style.liStyle1}>
                        <div className={Style.imgCover}>
                            <div className={`${Style.explainImg1}`} src="https://cdn.myzzym.com/myzzym/images/home/myzzym-main-05.png" alt="" />                        
                        </div>
                        <div className={`${Style.explainTxt}`} style={{width:"70%"}}>
                            <h2 style={{color:"#0091ff"}}>전문 관리 업체들과 함께</h2>
                            <p>마이짐은 믿을 수 있는 보안 업체 및 방충 업체와 제휴하여</p>
                            <p>안심하고 이용할 수 있는 프리미엄 창고가 되기 위해 노력합니다.</p>
                        </div>
                    </li>

                    <li className={`${Style.liStyle2} mt-5`}>
                    <div className={`${Style.explainTxt}`} style={{width:"70%"}}>
                            <h2 style={{color:"#0091ff"}}>규모별 맞춤 컨설팅</h2>
                            <p>마이짐 매니저가 보관 규모에 따라 최적화된 컨설팅을</p>
                            <p>제공해드리고 합리적인 이용을 도와드립니다.</p>
                        </div>
                        <div className={Style.imgCover}>
                            <div className={`${Style.explainImg2}`} src="https://cdn.myzzym.com/myzzym/images/home/myzzym-main-04.png" alt="" />                        
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ServiceInfo;