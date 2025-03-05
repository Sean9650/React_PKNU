import React, { useState } from 'react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import { Button, Form, Image, Input } from 'antd';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const ItemInsert1Page = () => {

  // 상태 변수
  const [fileList, setFileList] = useState([]);

  //백엔드로 자동으로 이미지 전달 방지 함수
  const customRequest = ({ file, onSuccess, OnError }) => {
    setTimeout(() => {
      if (file) {
        onSuccess('파일 업로드 완료');
      }
    }, 700);

  };

  const onChange = (e) => {
    console.log(e)
    const file1 = e.fileList.slice(-1); //[{uid, name, status, url}.{}]
    setFileList(file1);
  }

  //물품 등록 버튼 클릭 시 피드백
  const onFinish = async (e) => {
    console.log(e);
    const url = `/api/item/insert.json`;
    const headers = { "Content-Type": "multipart/form-data" };
    const body = {
      name: e.name,
      content: e.content,
      price: e.price,
      quantity: e.quantity,
      image: fileList[0].originFileObj
    }
    console.log(body)

    const { data } = await axios.post(url,body, { headers });
    console.log(data);
    if(data.status ===200) {
      navigate('/itemlist?page=1&text=')
    }

  }

  // 페이지 이동
  const navigate= useNavigate();


  return (
    <div>

      <h3>물품등록1</h3>

      <Form labelCol={{
        span: 4,
      }} style={{ maxWidth: 600 }} onFinish={onFinish}>

        <Form.Item label="물품명" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="물품내용" name="content">
          <Input />
        </Form.Item>

        <Form.Item label="물품가격" name="price">
          <Input />
        </Form.Item>

        <Form.Item label="물품수량" name="quantity">
          <Input />
        </Form.Item>

        <Form.Item label="물품이미지">
          <Dragger fileList={fileList} customRequest={customRequest} onChange={onChange}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from uploading company data or other
              banned files.
            </p>
          </Dragger>
          <hr />

          {fileList.length > 0 ? (
            <Image
              width={200}
              src={URL.createObjectURL(fileList[0].originFileObj)}
              alt="Uploaded file preview"
            />
          ) : (
            <p>No file selected</p> // Optional fallback text
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit">
          물품등록
        </Button>
      </Form>
    </div >
  );
};



export default ItemInsert1Page;