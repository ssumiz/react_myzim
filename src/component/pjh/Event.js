import React from 'react';

import Style from "../../sass/jh/Event.module.scss"
import styled from 'styled-components';

// Data
import Data from "../../data/data.json"

const EventDiv = styled.div`

    width:auto;
    height: 300px;
    background-size: contain;
    background-repeat: no-repeat; 
    

    
`

function Event(props) {
    return (
        <div className={`${Style.container}`}>
            <h2 className='mt-5 mb-5'>Event</h2>
            <div className={`${Style.innerContainer} row`}>
            {
                Data.event_info.map((val,idx) => {
                   
                    return(
                            
                            <div className={`col-12 col-md-6 mt-5 mb-5 text-xl-center fs-4`}  data-aos="fade-up" data-aos-duration="2000">
                                <a href={`/event/${idx}`}><EventDiv style={{backgroundImage: `url(${val.event_imgSrc})`}}></EventDiv></a>
                                <p>{val.event_text}</p>
                             </div>
                            
                    )
          
             })
            }
            </div>
            
        </div>
    );
}


export default Event;