import React from 'react'
import use from '../../data/data.json'
import style from '../../sass/yn/branch.module.scss'
import '../../sass/yn/branch.scss'

import { Helmet } from 'react-helmet';

import { useState, useEffect } from 'react';


function Branch() {
    const [region, setregion] = useState(0)
    const [branch, setbranch] = useState(0)

    return (
        <div className="mtb-10" data-aos="fade-up" data-aos-duration="2000">

            <div className='addressMap'>
                <div className={`${style.intro} intro container text-center my-5 `}>
                    <h2>지점 위치 및 소개</h2><br />
                    대한민국 여러 지점에서 스토어관리를 합니다.
                </div>

                <div className="adMap container d-flex justify-content-between flex-column flex-md-row mt-5">
                    <div className="wrapper col-md-6">
                        <div id='map' className='map'>
                            {
                                use.branch_info[branch].branch_pos
                            }
                            {/* <Helmet>

                                <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8cb9e561bde2e24c49fcf16e0cda250e"></script>
                           
                            </Helmet> */}
                        </div>
                    </div>

                    <div className="adMapzone col-md-6 mx-5 ">
                        <h4><strong>논현점</strong></h4>
                        <p>서울특별시 강남구 강남대로132길 29, 금강빌딩 지하 2층</p>
                        <hr />
                        <p>
                            -지하철-<br />
                            <img src="./img/yong/ic_line7.png" alt="" /> 논현역 7번출구 도보 4분거리 <br />
                            <img src="./img/yong/ic_line3.png" alt="" /> 신사역 1번출구 도보 9분거리 <br /><br />
                            -내비게이션- <br />
                            T map &nbsp;  &nbsp; 카카오맵 &nbsp;  &nbsp; 네이버지도 &nbsp;  &nbsp; 구글 맵
                        </p>
                    </div>
                </div>
                <div className="firstad container my-5">
                    <ul className="citynm d-md-flex row justify-content-center align-items-center">
                        {
                            use.region_info.map((v, i) => {
                                return (
                                    <>


                                        <li
                                            onClick={() => { setregion(i) }}
                                            className={`${region === i ? 'on' : null} col-2`}>
                                            {v.region_name}
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="secondad container my-5">
                    <ul className="subnm d-md-flex row justify-content-center align-items-center">
                        {
                            use.branch_info.map((vv, ii) => {
                                return (
                                    <>
                                        <li
                                            onClick={() => { setbranch(ii) }}
                                            className={`${branch === ii ? 'on' : null} col-2`}>
                                            {vv.branch_name}
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Branch;
