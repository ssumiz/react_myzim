import React from 'react';
import Partner from './pjh/Partner';
import Inquiry from './pjh/Inquiry';
import SizeInfo from './pjh/SizeInfo';
import Branch from './pyn/Branch'
import Useit from './pyn/Useit'
import Review from './pyn/ReviewSwiper'


function Main(props) {
    return (
        <div>

            <Branch></Branch>

            <Review></Review>
            
            <Useit></Useit>

            <SizeInfo></SizeInfo>

            <Inquiry></Inquiry>

            <Partner></Partner>
        </div>
    );
}

export default Main;