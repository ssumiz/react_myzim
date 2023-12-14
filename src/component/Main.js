import React from 'react';
import Partner from './pjh/Partner';

function Main(props) {
    return (
        <div>
            메인입니다.

            <h2>{props.Data.size_info[0].size_name}</h2>
            <h2>{props.Data.size_info[0].size_explain}</h2>
            <h2>{props.Data.size_info[0].size_price}</h2>
            <h2>{props.Data.size_info[0].size_purpose}</h2>
            <h2>{props.Data.size_info[0].size_img_src}</h2>

            <Partner></Partner>
        </div>
    );
}

export default Main;