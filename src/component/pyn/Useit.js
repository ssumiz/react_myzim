import React from 'react'
import use from '../../data/use.json'
import style from '../../sass/yn/use.module.scss'
import '../../sass/yn/use.scss'
import { useState, useEffect } from 'react';
function Useit() {
    const [tabnm, settabnm] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            settabnm(prevTabnm => (prevTabnm + 1) % use.tab.length);
        }, 3000);
        return () => clearInterval(intervalId);
    })
    return (
        <div className={`${style.useit} container mtb-10`} data-aos="fade-up" data-aos-duration="2000">
            <div className={`${style.dsc} text-center mb-5`}>
                <p >
                    <h1 className={`${style.wrap} personalColorBold`}>사용방법</h1> <br />
                    사용방법을 알려드립니다.
                </p>
            </div>
            <div className={`${style.threeBanner} container px-0`}>
                <div className={`${style.tabhead} w-100 d-flex justify-content-center py-3`}>
                    {
                        use.tab.map((v, i) => {

                            return (
                                <div className={`tabhead d-flex  w-100 justify-content-center py-3`}>
                                    <h4
                                        onClick={() => { settabnm(i) }}
                                        className={tabnm === i ? 'act' : null}
                                    ><a href="#none" className={style.heada}>{v.tabsubject}</a></h4>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='content d-flex flex-row justify-content-center align-items-center py-5 col-12 m-auto'>

                    {
                        use.tab[tabnm] &&
                        <div className={` d-flex align-items-center justify-content-center col-8`}>
                            <img src={use.tab[tabnm].tabact.tabimg} className={style.tab_img} alt="" />
                            <div className={`${style.tab_w} px-5`}>
                                <span className={`${style.tab_span} mx-5 py-3 d-inline-block`}><strong>STEP {tabnm + 1}</strong>
                                </span> <br />
                                <span>{use.tab[tabnm].tabact.tabtext}</span> <br />
                                <span>{use.tab[tabnm].tabact.tabtext2}</span>
                            </div>

                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Useit
