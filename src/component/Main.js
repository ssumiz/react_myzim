import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Slider from './sj_component/Slider';
import Partner from './pjh/Partner';
import Inquiry from './pjh/Inquiry';

function Main(props) {
    return (
        <div>
           <Slider />
           <Inquiry />
           <Partner />
        </div>
    );
}

export default Main;