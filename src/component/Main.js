import React from 'react';
import Partner from './pjh/Partner';
import Inquiry from './pjh/Inquiry';
import SizeInfo from './pjh/SizeInfo';

function Main(props) {
    return (
        <div>

            <SizeInfo></SizeInfo>

            <Inquiry></Inquiry>

            <Partner></Partner>
        </div>
    );
}

export default Main;