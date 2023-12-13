import React from 'react';

function Main(props) {
    return (
        <div>
            {props.datasrc.user_review[0].review_index}
        </div>
    );
}

export default Main;