import React from 'react';
import { useEffect, useState } from 'react';

import { Link, Routes, Route } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { List } from 'react-bootstrap-icons';

import menudata from '../../data/menu.json';

import menu from '../../sass/sj/sj_menu.module.scss';

const MainHeader = () => {

    const toggleclick = ()=>{
        document.querySelector('.mobile-menu').style.transform = "translateX(0)";
        document.body.classList.add('dim');
    }

    const toggleclick2 = ()=> {
        document.querySelector('.mobile-menu').style.transform = "translateX(100%)";
        document.body.classList.remove('dim');
    }


    return (
    <>
        <Navbar className={`${menu.headers} d-flex justify-content-between align-items-center border-bottom`}>
            <h1 className={`${menu.logo} p-0 m-0`}><Link to="/"><img src="/img/sj_img/logo_renewal.png" alt="logo" /></Link></h1>
            <Nav className={`${menu.mainmenu} d-xl-flex d-none`}>
                {
                    menudata.map((e,i)=>{
                        return(
                            <div className={`${menu.rel_menu} position-relative`} >
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
            <Nav className={`${menu.drop_menu} nav d-xl-flex d-none`}>
                <NavDropdown title="KOR" id="basic-nav-dropdown" className ={`${menu.main_dropdown}`}>
                    <NavDropdown.Item href="#action/3.1">KOR</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">ENG</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="로그인" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/Login">로그인</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="회원가입" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">회원가입</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick = {toggleclick}></Navbar.Toggle>
            <Nav className={`position-fixed ${menu.mmenu} mobile-menu`}>
                <Nav.Link as={Link} to="/" onClick={toggleclick2}><span>Close</span></Nav.Link>
                <Nav.Link as={Link} to="/login">로그인/회원가입</Nav.Link>
                <h2>지금 회원가입 시 SMALL 사이즈 패키지 무료 제공!</h2>
                <div className={`${menu.mobile_navbar}`}>
                    <Nav>
                        {
                            menudata.map((첫,뒤)=>{
                                return(
                                    <>
                                        <Nav.Link as={Link} to={첫.href}><span>{첫.menu1}</span>
                                        {
                                            첫.isSub === 'true' &&
                                            <Nav className={`${menu.mobile_sub}`}>
                                                {
                                                    첫.d2.map((둘,셋)=>{
                                                       return(<Nav.Link as={Link} to={둘.href}>{둘.name}</Nav.Link>);
                                                    })
                                                }
                                            </Nav>
                                        }
                                        </Nav.Link>
                                    </>
                                )
                            })
                        }
                    </Nav>
                </div>
            </Nav>
        </Navbar>
    </>
    );
};

export default MainHeader;