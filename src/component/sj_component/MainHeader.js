import React from 'react';
import { useEffect, useState } from 'react';

import { Link, Routes, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import menudata from '../../data/menu.json';

import menu from '../../sass/sj/sj_menu.module.scss';

const MainHeader = () => {
    const [toggle,settoggle] = useState(false);

    const menucall = (toggles) =>{
        if(toggles){
            document.body.classList.add('on');
        } else {
            document.body.classList.remove('on');
        }
    }

    return (
    <>
        <div className={`${menu.headers} d-flex justify-content-between align-items-center border-bottom`}>
            <h1 className={`${menu.logo} p-0 m-0`}><Link to="/"><img src="/img/sj_img/logo_renewal.png" alt="logo" /></Link></h1>
            <Nav className={`${menu.mainmenu}`}>
                {
                    menudata.map((e,i)=>{
                        return(
                            <div className={`${menu.rel_menu} position-relative`}>
                                <Link to={e.href}>{e.menu1}</Link>
                                { e.isSub === 'true' &&
                                <Nav className={`${menu.smenu} position-absolute`}>
                                    {
                                        e.d2.map((el,idx)=>{
                                            return(
                                                <>
                                                    <Link to={el.href}>{el.name}</Link>
                                                </>
                                            );
                                        })
                                    }
                                </Nav>
                                 }
                            </div>
                        )
                    })
                }
            </Nav>
            <Nav className={`${menu.drop_menu}`}>
                <NavDropdown title="KOR" id="basic-nav-dropdown" className ={`${menu.main_dropdown}`}>
                    <NavDropdown.Item href="#action/3.1">KOR</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">ENG</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="로그인" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">로그인</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="회원가입" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">회원가입</NavDropdown.Item>
                </NavDropdown>
                <Button className={`${menu.listbtn}`} onClick={()=>{ settoggle(!toggle); menucall(toggle);}}><i class="bi bi-list"></i></Button>
            </Nav>
        </div>
        <div className={`fixed_menu m-0 position-fixed`}>
            <Nav className={`fixed_nav`}>
                <h2>SITEMAP</h2>
                {
                    menudata.map((ele,index)=>{
                        return(
                            <>
                                <Link to={ele.href}>{ele.menu1}</Link>
                                <Nav className={`flex-column fixed_sub`}>
                                    {
                                        ele.d2.map((ee,ii)=>{
                                            return(
                                                <>
                                                    <Link to={ee.href}>{ee.name}</Link>
                                                </>
                                            );
                                        })
                                    }
                                </Nav>
                            </>
                        );
                    })
                }
            </Nav>
        </div>
    </>
    );
};

export default MainHeader;