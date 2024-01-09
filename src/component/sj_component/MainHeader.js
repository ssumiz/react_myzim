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

    return (
    <>
        <Navbar className={`${menu.headers} d-flex justify-content-between align-items-center border-bottom`}>
            <h1 className={`${menu.logo} p-0 m-0`}><Link to="/"><img src="/img/sj_img/logo_renewal.png" alt="logo" /></Link></h1>
            <Nav className={`${menu.mainmenu} d-xl-flex d-none`}>
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
            <Nav className={`${menu.drop_menu} nav d-xl-flex d-none`}>
                <NavDropdown title="KOR" id="basic-nav-dropdown" className ={`${menu.main_dropdown}`}>
                    <NavDropdown.Item href="#action/3.1">KOR</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">ENG</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="로그인" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/Login">로그인</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="회원가입" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">회원가입</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="d-xl-none d-block"></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav id="top_mobile">
                        <Nav.Item>
                            <Nav.Link to="/">KOR</Nav.Link>                        
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link to="/">ENG</Nav.Link>                        
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link to="/">로그인</Nav.Link>                        
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link to="/">회원가입</Nav.Link>                        
                        </Nav.Item>
                    </Nav>
                {
                    menudata.map((e,i)=>{
                        return(
                            <div>
                                <Link to={e.href}>{e.menu1}</Link>
                                { e.isSub === 'true' &&
                                <Nav>
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
            </Navbar.Collapse>
        </Navbar>
    </>
    );
};

export default MainHeader;