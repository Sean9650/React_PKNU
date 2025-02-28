import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BoardPage = () => {

    const [rows, setRows] = useState([]);
    const [total, setTotal] = useState([0]);
    const [page, setPage] = useState(1);

    const handleData = async () => {
        const url = '/api/board/select.json?page=1&text=&cnt=20'
        const { data } = await axios.get(url)
        console.log(data);
        if (data.status === 200) {
            setRows(data.rows);
            setTotal(data.total);
        }
    };

    // 화면 구동시 handleData() 함수 호출용
    useEffect(() => {
        handleData();
    }, []);

    //게시판 목록
    let tbody = rows.map(obj => (
        <tr key={obj._id}>
            <td>{obj._id}</td>
            <td>{obj.title}</td>
            <td>{obj.writer}</td>
            <td>{obj.hit}</td>
            <td>{obj.regdate2}</td>
        </tr>
    ));

    //페이지네이션 ex)509개 20개씩 26페이지
    let pageTag = [];
    const pages = Math.ceil(total / 20); //pages가 26임
    for (let i = 1; i <= pages; i++) {
        pageTag.push(
            <button key={i}onClick={() => changePage(i)}>{i}</button>);
    }

    const changePage =(i) =>{
        setPage(i);
    }
    return (
        <div>
            {page}
            <hr />
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>조회수</th>
                        <th>날짜</th>
                    </tr>
                </thead>

                <tbody>
                    {tbody}
                </tbody>
            </table>
            {pageTag}
        </div>
    );
};

export default BoardPage; 