import React from 'react'

function Branch() {
    return (
        <div>
            <div id="addressMap">
                <div className="intro container text-center my-5 ">
                    <h2>지점 위치 및 소개</h2><br />
                    대한민국 여러 지점에서 스토어관리를 합니다.
                </div>

                <div className="adMap container d-flex justify-content-between flex-column flex-md-row mt-5">
                    <div className="wrapper col-md-6">
                        <div id="map">

                            <script type="text/javascript"
                                src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=63fcf8dab6de88baf904e97b0100b062"></script>

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
            </div>
        </div>
    );
}

export default Branch;
