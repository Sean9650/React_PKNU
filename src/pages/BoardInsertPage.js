import React from 'react';
import Menu1 from './components/Menu1';


const BoardInsertPage = () => {

    //script의 위치
    const myFunc = (msg) => {
        alert(msg)
    }

    //html의 위치
    return (
        <div>
            <h3>글쓰기</h3>
            <hr />
            <Menu1 str={"문자"} num={123} myFunc={myFunc} />
        </div>
    );
};

export default BoardInsertPage;