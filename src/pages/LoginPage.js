import React from 'react';
import { useState } from 'react';
import styles from '../Login.module.css';

const LoginPage = () => {

    // 1. 상태 변수 (입력하는 항목의 개수)
    // cosnt [변수명, 변경하고자 하는 함수]
    const [userid, setUserid] = useState('aaa');  // 아이디 보관용
    const [userpw, setUserpw] = useState('bbb');  // 암호 보관용

    // 2. 함수 생성
    const changeId = (e) => {
        console.log(e.target.value);
        setUserid(e.target.value);
    }

    const changePw = (e) => {
        console.log(e.target.value);
        setUserpw(e.target.value);
    }

    return (
        <div className={styles.container}>
            <h3>로그인</h3>
            아이디 : <input type="text" value={userid} onChange={(e) => changeId(e)} /><br />
            암호 : <input type="password" value={userpw} onChange={(e) => changePw(e)} /><br />
            <button type="submit">로그인</button>
        </div>
    );
};

export default LoginPage;