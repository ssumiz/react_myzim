import React, { useState } from 'react';

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import Style from "../../sass/jh/Popup.module.scss"

function Static(props) {

    const [isPop, setPop] = useState(true);

    const showPop = () => setPop(true);
    const hidePop = () => setPop(false);

    return (
        <>
            <div className="modal show" style={{ display: 'block', position: 'initial' }}>

                {/* <Button onClick={() => { showPop() }}>show</Button> */}

                <Modal show={isPop}>

                    <Modal.Header closeButton>
                        <Modal.Title>

                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                        <Button onClick={() => { hidePop() }}>hide</Button>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="dark">Close</Button>
                        <Button variant="warning">Save Changes</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    );
}

export default Static;