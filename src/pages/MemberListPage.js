import { Pagination, Table } from "antd";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MemberListPage = () => {

    // 상태변수 생성 [변수, 변수를 변경할 함수명]
    const [rows, setRows] = useState([]); // 초기값 배역 []
    const [total, setTotal] = useState(0); //초기값 숫자 0
    const [page, setPage] = useState(1); // 초기값 숫자 1

    // 백엔드에서 회원정보를 가져오는 함수
    const handleData = async () => {
        const url = `/api/member/select.json?page=${page}&text=&cnt=10`;
        const { data } = await axios.get(url);
        console.log(data);
        if (data.status === 200) {
            // 상태변수에 값을 보관
            setRows(data.rows);
            setTotal(data.total);
        }
    }

    // 생명주기 => 마지막에 [page]이면 page의 숫자가 바뀔 때마다 실행됨
    useEffect(() => {
        handleData();
    }, [page]);

    const columns = [
        {
            title: '아이디',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: '이름',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '나이',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '이메일',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '등록일',
            dataIndex: 'regdate2',
            key: 'regdate2',
        },
    ];

    const onChange = (page, _) => {
        console.log(page)
        setPage(page);

    }

    return (
        <div>
            <h3>회원목록</h3>

            <Table dataSource={rows} columns={columns} rowKey={"_id"} pagination={false} />;
            <div>
                <Pagination defaultCurrent={page} total={total} onChange={onChange} align="center" />
            </div>
        </div>
    );
};

export default MemberListPage;