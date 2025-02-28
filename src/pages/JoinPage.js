import React from 'react';
import styles from '../Join.module.css';
import { useState } from 'react';

const JoinPage = () => {
    const [id, setId] = useState('a');
    const [pw, setPw] = useState('b');
    const [pw1, setPw1] = useState('b');
    const [name, setName] = useState('가나다');
    const [age, setAge] = useState(11);
    const [email, setEmail] = useState('aaa');
    const [email1, setEmail1] = useState('naver.com');

    const changeValue = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        if (name === 'id') {
            setId(value);
        }
        else if (name === 'pw'){setPw(value);}
        else if (name === 'pw1'){setPw1(value);}
        else if (name === 'name'){setName(value);}
        else if (name === 'age'){setAge(value);}
        else if (name === 'email'){setEmail(value);}
        else if (name === 'email1'){setEmail1(value);}
    }
    return (

        <div className={styles.container}>
            <h3>회원가입</h3>
            아이디  <input type="text" value={id} onChange={changeValue} name='id' placeholder="아이디" /><br /><br />
            비밀번호<input type="password" value={pw} onChange={changeValue} name='pw' placeholder="비밀번호" /><br /><br />
            비밀번호 확인<input type="password" value={pw1} onChange={changeValue} name='pw1' placeholder="비밀번호 확인" /><br /><br />
            이름<input type="text" value={name} onChange={changeValue} name='name' placeholder="이름" /><br /><br />
            나이<input type="number" value={age} onChange={changeValue} name='age' placeholder="나이" /><br /><br />
            이메일 <input type="text" value={email} onChange={changeValue} name='email' placeholder="이메일" />
            @<select onChange={changeValue} value={email1} name='email1'>
                <option value='gmail.com'>gmail.com</option>
                <option value='naver.com'>naver.com</option>
            </select>< br />
            <button type="submit">회원가입</button>
        </div>
    );
};

export default JoinPage;