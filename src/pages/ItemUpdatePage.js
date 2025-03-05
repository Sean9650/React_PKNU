// src / pages / ItemUpdatePage.js

import { Form, Image, Input, InputNumber, Button } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { InboxOutlined } from '@ant-design/icons';

const ItemUpdatePage = () => {
    const [searchParams] = useSearchParams();
    const no = searchParams.get('no');
    const [row, setRow] = useState({});
    const [fileList, setFileList] = useState([]);
    const [cnt, setCnt] = useState(0);

    // 데이터 가져오기
    const handleData = async () => {
        try {
            const url = `/api/item/selectone.json?no=${no}`;
            const { data } = await axios.get(url);
            if (data.status === 200) {
                setRow(data.result);
            }
        } catch (error) {
            console.error("데이터를 불러오는 중 오류 발생:", error);
        }
    };

    useEffect(() => {
        handleData();
    }, [no]);

    // 백엔드로 자동으로 이미지 전달 방지
    const customRequest = ({ file, onSuccess, onError }) => {
        setTimeout(() => {
            if (file) {
                onSuccess('파일 업로드 완료');
            } else {
                onError(new Error('파일 업로드 실패'));
            }
        }, 700);
    };

    // 파일 변경 핸들러
    const onChange = (info) => {
        if (info.fileList.length > 0) {
            const latestFile = info.fileList.slice(-1);
            setFileList(latestFile);
            setCnt((prevCnt) => prevCnt + 1);
        } else {
            setFileList([]);
            setCnt(0);
        }
    };

    return (
        <div>
            <h3>물품 변경</h3>

            <Form labelCol={{ span: 4 }} style={{ maxWidth: 600 }} initialValues={row} key={row._id}>
                <Form.Item label="물품번호" name="_id">
                    <Input disabled />
                </Form.Item>

                <Form.Item label="물품명" name="name">
                    <Input />
                </Form.Item>

                <Form.Item label="물품내용" name="content">
                    <Input />
                </Form.Item>

                <Form.Item label="물품가격" name="price">
                    <InputNumber />
                </Form.Item>

                <Form.Item label="물품수량" name="quantity">
                    <InputNumber />
                </Form.Item>

                <Form.Item label="물품이미지">
                    <Dragger fileList={fileList} customRequest={customRequest} onChange={onChange} beforeUpload={() => false}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.
                        </p>
                    </Dragger>
                    <hr />

                    {cnt === 0 ? (
                        row.img ? <Image width={200} src={row.img} alt="image" /> : <p>No image available</p>
                    ) : (
                        fileList.length > 0 ? (
                            <Image
                                width={200}
                                src={URL.createObjectURL(fileList[0].originFileObj)}
                                alt="Uploaded file preview"
                            />
                        ) : (
                            <p>No file selected</p>
                        )
                    )}
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        저장
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ItemUpdatePage;
