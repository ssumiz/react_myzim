import React from 'react';
import Partner from './pjh/Partner';
import Inquiry from './pjh/Inquiry';
import MainSlider from './sj_component/MainSlider';

function Main(props) {
    return (
        <div>
            <MainSlider></MainSlider>

            <Inquiry></Inquiry>

            <Partner></Partner>
        </div>
    );
}

export default Main;