import React from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const Login1Page = () => {

    const dispatch = useDispatch();

    const onFinish = async (e) => {
        console.log(e);
        const url = `/api/member/login.json`;
        const body = {
            _id: e.id,
            password: e.password
        }
        const { data } = await axios.post(url, body);
        console.log(data);
        if (data.status === 200) {
            dispatch({ type: 'login', token: data.token })
        }
    }

    return (
        <div>
            <h3>로그인1</h3>
            <Form style={{ width: 500 }} labelCol={{ span: 8 }} onFinish={onFinish}>
                <Form.Item label="아이디" name="id">
                    <Input />
                </Form.Item>

                <Form.Item label="암호" name="password">
                    <Input />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">로그인</Button>
                </Form.Item>

            </Form>
        </div>
    );
};

export default Login1Page;