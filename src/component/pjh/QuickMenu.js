import React from 'react';

import { TelephoneFill, ChatFill, ArrowUpCircleFill } from "react-bootstrap-icons"

import Style from "../../sass/jh/QuickMenu.module.scss"

function QuickMenu(props) {
    return (
        <div>
            <div className={` ${Style.quickMenu} position-fixed`}>

                <a href="" className={`d-block position-relative`} target="_blank" style={{ color: "black" }} >
                    <div className={`${Style.linkPhone} d-flex justify-content-center align-items-center personalColorBoldBg`}>
                        <TelephoneFill></TelephoneFill>
                    </div>
                </a>
                
                <a href="https://pf.kakao.com/" className={`d-block position-relateve`} target="_blank" style={{ color: "black" }}>
                    <div className={`${Style.linkKaKaoTalk} d-flex justify-content-center align-items-center`}>
                        <ChatFill></ChatFill>

                    </div>
                </a>

                <div className={`d-block position-relative`} target="_blank" style={{ color: "black", cursor: "pointer" }} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} >
                    <div className={`${Style.linkTop} d-flex justify-content-center align-items-center`}>
                        <ArrowUpCircleFill style={{ scale: "1.5", color: "#0091ff", width: "2rem", height: "2rem" }}></ArrowUpCircleFill>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default QuickMenu;