import React from 'react';

import Slider from './sj_component/Slider';
import Partner from './pjh/Partner';
import Inquiry from './pjh/Inquiry';

function Main(props) {
    return (
        <div>
            <Slider></Slider>

            <Inquiry></Inquiry>

            <Partner></Partner>

        </div>
    );
}

export default Main;