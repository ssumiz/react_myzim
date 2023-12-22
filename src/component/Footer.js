import React from 'react';
import End from './pjh/End'
import QuickManu from './pjh/QuickMenu'
import Popup from './pjh/Popup'

function Footer(props) {
    return (
        <div>

            <End data={props}></End>

            <QuickManu></QuickManu>

            <Popup></Popup>
        </div>
    );
}

export default Footer;