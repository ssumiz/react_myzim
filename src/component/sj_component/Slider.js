import React from 'react';
import mainslider from '../../sass/sj/sj_main_slider.module.scss'
import Ss1 from './Slider1';

const Slider = () => {
    return (
        <div className={`${mainslider.main_slider} d-flex`}>
            <Ss1 />
        </div>
    );
};

export default Slider;