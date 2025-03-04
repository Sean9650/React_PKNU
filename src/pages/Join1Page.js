import { Button, Form, Input, Select, Space } from 'antd';
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const Join1Page = () => {

    const navigate = useNavigate();

    // 회원가입 버튼을 눌렀을때
    const onFinish = async (values) => {
        console.log(values);

        const url = `/api/member/join.json`;
        const body = {
            _id: values.id,
            password: values.password,
            name: values.name,
            age: values.age,
            email: values.email + "@" + values.email1
        }
        const { data } = await axios.post(url, body);
        if (data.status === 200) {
            alert('회원가입성공');
            navigate(`/memberlist`);
        }

    }
    return (
        <div>
            <h3>회원가입1</h3>
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }} onFinish={onFinish}>
                <Form.Item label="아이디" name="id">
                    <Input />
                </Form.Item>

                <Form.Item label='암호' name="password">
                    <Input.Password />
                </Form.Item>

                <Form.Item label='이름' name="name">
                    <Input.Password />
                </Form.Item>

                <Form.Item label='나이' name="age">
                    <Input.Password />
                </Form.Item>

                <Form.Item label="이메일">
                    <Space.Compact>
                        <Form.Item name="email">
                            <Input />
                        </Form.Item>

                        <Form.Item name="email1">
                            <Select>
                                <Select.Option value="naver.com">naver.com</Select.Option>
                                <Select.Option value="gmail.com">gmail.com</Select.Option>
                            </Select>
                        </Form.Item>
                    </Space.Compact>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">회원가입</Button>
                </Form.Item>
            </Form>
        </div >
    );
};

export default Join1Page; <h3>회원가입1</h3>