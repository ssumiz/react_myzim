import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import loginscss from '../../sass/sj/login.module.scss';

const Login = () => {
    
    return (
        <div className={`${loginscss.formwrap}`}>
           <Form className={`${loginscss.loginform}`}>
                <h2>로그인 페이지</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="id">이메일 주소</Form.Label>
                    <Form.Control type="email" placeholder="이메일을 입력해주세요" id="id" />
                    <Form.Text className="text-muted">
                    이메일을 무단으로 사용하면 법적인 책임이 있습니다.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label htmlFor="passwd">비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="이메일 기억하기" />
                    <Link to="/">비밀번호 재설정</Link>
                </Form.Group>
                <Button variant="primary" type="submit">
                    로그인
                </Button>
                <div className={`${loginscss.isJoin}`}>
                    <h2>계정이 없으신가요?</h2>
                    <Link to="/join">회원가입 하러가기</Link>
                </div>
    </Form>

        </div>
    );
};

export default Login;