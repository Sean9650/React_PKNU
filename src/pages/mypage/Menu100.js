
// src / pages / mypage / Menu100.js

import { Breadcrumb, Button, Form, Input, InputNumber } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Menu100 = () => {

    const [result, setResult] = useState({});

    const { token } = useSelector((state) => state.LoginReducer);

    const handleData = async () => {
        const url = `/api/member/selectone.json`;
        const headers = { "auth": token };
        const { data } = await axios.get(url, { headers });
        console.log(data);
        if (data.status === 200)
            setResult(data.result);

    };

    useEffect(() => {
        handleData();
    }, []);

    const onFinish = async (e) => {
        const url = `/api/member/update.json`;
        const headers = { auth: token };
        const body = {
            name: e.name,
            email: e.email,
            age: e.age
        }
        const { data } = await axios.put(url, body, { headers });
        console.log(data);
    }

    return (
        <div>
            <h3>회원정보변경</h3>
            <Breadcrumb items={[
                { title: 'Home' },
                { title: <a href="">마이페이지</a> },
                { title: '정보변경', },
            ]} />

            <Form style={{ width: 500 }} labelCol={{ span: 8 }} initialValues={result} key={result._id}
                onFinish={onFinish}>
                <Form.Item label="이름" name="name">
                    <Input />
                </Form.Item>

                <Form.Item label="나이" name="age">
                    <InputNumber />
                </Form.Item>

                <Form.Item label="이메일" name="email">
                    <Input />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">정보변경</Button>
                </Form.Item>
            </Form>

        </div>
    );
};

export default Menu100;