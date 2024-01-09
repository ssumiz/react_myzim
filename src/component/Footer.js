import React, { useEffect, useState } from 'react';
import End from './pjh/End'
import QuickManu from './pjh/QuickMenu'
import Popup from './pjh/Popup'

function Footer(props) {

    const [showPopup, setShowPopup] = useState(false);

    const CHK_VISITED = localStorage.getItem("popupHistory");

    useEffect(()=>{

        const today = new Date();
        const handlePopup = () =>{
            if( CHK_VISITED && CHK_VISITED > today){
                return;
            }

            if( !CHK_VISITED || CHK_VISITED < today ){

                setShowPopup(true);
            }
        };

        window.setTimeout(handlePopup, 1000);

    },[CHK_VISITED]);

    return (
        <div>

            <End data={props}></End>

            <QuickManu></QuickManu>

            {showPopup && <Popup setShowPopup={setShowPopup}></Popup>}

            <span></span>
        </div>
    );
}

export default Footer;