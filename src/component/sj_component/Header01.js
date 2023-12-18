import React from 'react';

import hd1 from '../../sass/sj/sj_h1.module.scss';

import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header01 = () => {
    return (
        <div className={`${hd1.header1} border-bottom`}>
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className={`${hd1.logo} m-0`}><a href="#"><img src="/img/sj_img/logo.png" alt="logo" className="d-block" /></a></h1>
                <Nav className={hd1.top_nav}>
                    <NavDropdown title="언어 선택" id="basic-nav-dropdown" className={hd1.dropdown_select}>
                        <NavDropdown.Item href="#action/3.1">KOR</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">ENG</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#features">로그인</Nav.Link>
                    <Nav.Link href="#pricing">회원가입</Nav.Link>
                </Nav>
            </div>
        </div>
    );
};

export default Header01;