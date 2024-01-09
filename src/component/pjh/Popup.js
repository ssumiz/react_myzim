import React, { useState } from 'react';


import { XCircleFill } from 'react-bootstrap-icons'

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import Style from "../../sass/jh/Popup.module.scss"
import "../../sass/jh/Popup.scss"

function Popup({setShowPopup}) {

    const [isPop, setPop] = useState(true);

    const closePop = () => setPop(false);

    const closeTodayPop = () =>{
        let expire = new Date();
        expire = expire.setHours(expire.getHours() + 24 );
        localStorage.setItem("popupHistory", expire);

        console.log("setTime"+expire.getDate);

        setShowPopup(false);
    }

    return (
        <>
            <div className="modal show popupModal" style={{ display: 'block', position: 'initial' }}>

                <Modal
                    show={isPop}
                    onHide={closePop}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className={Style.modal}
                >

                    <Modal.Body className={Style.modalBody} >
                        {/* <Link to="/">dd</Link> */}
                        <img src="/img/pjh/popup/eventImg_1.png" alt="" style={{ borderRadius: "2%" }} />
                        <Button onClick={() => { closePop() }} >닫기</Button>
                        <p onClick={()=>{ closeTodayPop()}} className={Style.checkBox}>하루동안 팝업 숨기기 <XCircleFill style={{marginBottom:"2px"}}></XCircleFill></p>
                    </Modal.Body>

                </Modal>

            </div>
        </>
    );
}

export default Popup;