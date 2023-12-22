import React from 'react';
import End from './pjh/End'
import QuickManu from './pjh/QuickMenu'

function Footer(props) {
    return (
        <div>

            <End data={props}></End>

            <QuickManu></QuickManu>

        </div>
    );
}

export default Footer;