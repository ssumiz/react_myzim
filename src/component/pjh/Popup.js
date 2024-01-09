import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import Style from "../../sass/jh/Popup.module.scss"
import "../../sass/jh/Popup.scss"

function Popup(props) {

    const [isPop, setPop] = useState(true);

    const showPop = () => setPop(true);
    const hidePop = () => setPop(false);

    return (
        <>
            <div className="modal show popupModal" style={{ display: 'block', position: 'initial' }}>

                <Modal
                    show={isPop}
                    onHide={hidePop}
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    className={Style.modal}
                >

                    <Modal.Body className={Style.modalBody} >
                        {/* <Link to="/">dd</Link> */}
                        <img src="/img/pjh/popup/eventImg_1.png" alt="" style={{ borderRadius: "2%" }} />
                        <Button onClick={() => { hidePop() }} >닫기</Button>
                    </Modal.Body>

                </Modal>

            </div>
        </>
    );
}

export default Popup;