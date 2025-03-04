import { Button, Form, Input, Pagination, Select, Space, Table } from 'antd';
import axios, { formToJSON } from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';


const ItemListPage = () => {

    // 0. 주소창의 ?page=1&text= 부분의 값을 가져오기 위해서
    const [searchParams, _] = useSearchParams();
    const navigate = useNavigate();

    // 1. 상태변수
    const [rows, setRows] = useState([]); //물품목록 보관 변수
    const [page, setPage] = useState(searchParams.get('page')); // 현재 페이지 보관 변수
    const [text, setText] = useState(searchParams.get('text')); // 검색어 보관 변수
    const [total, setTotal] = useState(0); // 전체 물품의 개수 보관

    // 2. 함수
    const handleData = async () => {
        const url = `/api/item/selectlist.json?page=${page}&text=${text}&cnt=10`;
        const { data } = await axios.get(url);
        console.log(data);
        if (data.status === 200) {
            setRows(data.result);
            setTotal(data.total);
        }
    }

    // 3. 이펙트 => 상태변수가 변경될때 호출해서 화면을 갱신
    // ex) 페이지가 바뀌거나 또는 검색어가 바뀔 떼
    useEffect(() => {
        handleData();
    }, [page, text]);

    const columns = [
        { title: '물품번호', dataIndex: '_id', key: '_id' },
        { title: '물품명', dataIndex: 'name', key: 'name' },
        { title: '물품내용', dataIndex: 'content', key: 'content' },
        { title: '물품가격', dataIndex: 'price', key: 'price' },
        { title: '물품수량', dataIndex: 'quantity', key: 'quantity' },
        { title: '등록일', dataIndex: 'regdate1', key: 'regdate1' },
        {
            title: '이미지',
            render: (e) => {
                return (
                    <img src={e.img} style={{ width: '50px' }} />
                )
            }
        },
    ]

    // 페이지 바뀔때는 상태변수 page로 바꾸고 주소창의 페이지도 바꿔야 됨. 새로고침을 유지하기 위해서
    const onChange = (page, _) => {
        setPage(page);
        navigate(`/itemlist?page=${page}&text=`)
    };


    // 검색버튼 클릭 시 호출되는 함수
    const onFinish = (values) => {
        console.log(values);
        setText(values.text);
        if (typeof values.text === 'undefined') {
            navigate(`/itemlist?page=1&text=`)
        }
        else {
            navigate(`/itemlist?page=1&text=${values.text}`)
        }
    }


    return (
        <div>
            <h3>물품목록</h3>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} onFinish={onFinish} >
                <Form.Item label="">
                    <Space.Compact>
                        <Form.Item name="text">
                            <Input />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">검색</Button>
                        </Form.Item>
                    </Space.Compact>
                </Form.Item>
            </Form>
            <Table dataSource={rows} columns={columns} rowKey={"_id"} pagination={false} />
            <Pagination align="center" defaultCurrent={page} total={total} onChange={onChange} />


        </div>
    );
}

export default ItemListPage;