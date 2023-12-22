import React from 'react';

import { ChatFill } from "react-bootstrap-icons"

import Style from "../../sass/jh/Inquiry.module.scss"

function Inquiry(props) {
    return (
        <div className={`${Style.bgColor} mt-10 mb-10`} data-aos="fade-up" data-aos-duration="2000">
            <div className={`${Style.mContainer} mt-5 mb-5 container`}>
                <div className="text-center pt-5">
                    <h1 className="personalColorBold">문의하기<ChatFill className="pb-2 ms-1"></ChatFill></h1>
                    <p className="mt-3">아래 내용을 기입 후 문의하기 버튼을 눌러주세요.</p>

                </div>

                <form className="row align-item-center p-5 text-center d-flex justify-center w-600" style={{ color: "rgb(66, 66, 66)" }}>

                    <div className="col-12 mb-3">
                        <p className="text-start ">문의제목</p>
                        <input className={Style.columFrame} type='text' style={{ width: "500px", height: "35px" }}></input>
                    </div>
                    <div className={"col-12 mb-3"}>
                        <p className="text-start">이름</p>
                        <input className={Style.columFrame} type='text'></input>
                    </div>
                    <div className={"col-12 mb-3"}>
                        <p className="text-start">연락처</p>
                        <input className={Style.columFrame} type='text'></input>
                    </div>
                    <div className="col-12 mb-3">
                        <p className="text-start">이메일주소</p>
                        <input className={Style.columFrame} type='text'></input>
                    </div>
                    <div className="col-12 mb-3">
                        <p className="text-start">문의내용</p>
                        <input className={Style.columFrame} type='text' style={{ height: "150px" }}></input>
                    </div>

                    <button className={Style.btnFrame}>문의하기</button>

                </form>
            </div>


        </div>
    );
}

export default Inquiry;