// 파일명 : src / pages /ItemListPage.js
import { Button, Flex, Form, Input, Pagination, Space, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ItemListPage = () => {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // 1. 상태 변수
    // /itemlist?page=1&text=    =>  /itemlist
    const [rows, setRows] = useState([]); // 물품목록 보관 변수
    const [page, setPage] = useState(searchParams.get('page') || 1); // 현재페이지 보관 변수
    const [text, setText] = useState(searchParams.get('text') || ''); // 검색어 보관 변수
    const [total, setTotal] = useState(0); // 전체 물품의 개수 보관
    const [chk, setChk] = useState(true); // true, false 삭제완료를 체크

    // 2. 함수
    const handleData = async () => {
        const url = `/api/item/selectlist.json?page=${page}&text=${text}&cnt=10`;
        const { data } = await axios.get(url);
        console.log(data);
        if (data.status === 200) {
            setRows(data.result);
            setTotal(data.total);
        }
    };

    // 3. 이펙트 => 상태변수가 변경될때 호출해서 화면을 갱신
    // ex) 페이지가 바뀌거나 또는 검색어가 바뀌거나
    useEffect(() => {
        handleData();
        setChk(false);
    }, [page, text, chk]);

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
                // console.log(e);
                return (
                    <img src={e.img} style={{ width: '50px' }} />
                )
            }
        },
        {
            title: '버튼',
            render: (e) => {
                return (
                    <>
                        <Button color="primary" onClick={() => handleUpdate(e._id)} variant="filled" htmlType="button">변경</Button>
                        <Button color="danger" onClick={() => handleDelete(e._id)} variant="filled" htmlType="button">삭제</Button>
                    </>
                )
            }
        },
    ];

    const handleUpdate = (no) => {
        navigate(`/itemupdate?no=${no}`)
    }

    const handleDelete = async (no) => {
        if (window.confirm('삭제할까요?')) {
            const url = `/api/item/delete.json?no=${no}`;
            const { data } = await axios.delete(url);
            console.log(data);
            if (data.status === 200) {
                // 새로운 내용을 표시하기 위해서 useEffect를 사용해야 됨. chk가 false면 true로 변경
                setChk(preCheck => !preCheck);


            }
        }
    };

    // 페이지 바뀔때는 상태변수 page바꾸고 주소창의 페이지도 바꿔야 됨. 새로고침을 유지하기
    const onChange = (page, _) => {
        setPage(page);
        // 같은 페이지의 param만 바뀌는 경우 다른페이지 이동아님.
        setSearchParams({ page: page, text: text });
    };

    // 검색버튼 클릭시 호출되는 함수
    const onFinish = (values) => {
        setPage(1);
        if (typeof values.text === 'undefined') {
            setText('');
            setSearchParams({ page: 1, text: '' });
        }
        else {
            setText(values.text);
            setSearchParams({ page: 1, text: values.text });
        }
    };

    return (
        <div>
            <h3>물품목록</h3>
            <Flex justify={'flex-end'} align={'flex-end'}>
                <Form labelCol={{ span: 4 }} onFinish={onFinish} style={{ marginBottom: '-30px' }}>
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
            </Flex>

            <Table dataSource={rows} columns={columns} rowKey={"_id"} pagination={false} />
            <Pagination align="center" current={page} total={total} onChange={onChange} showSizeChanger={false} />
        </div>
    );
};

export default ItemListPage;