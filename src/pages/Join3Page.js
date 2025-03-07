import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const Join3Page = () => {
    const scriptUrl = "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
    const open = useDaumPostcodePopup(scriptUrl);
    const [row, setRow] =useState({});
    const handleComplete = (data) => {
        console.log(data);
        setRow({
            postcode : data.zonecode,
            roadAddress:data.roadAddress,
            jibunAddress: data.jibunAddress,
            detailAddress: data.buildingName,
            extraAddress: data.hname,
        })
    }
    const handleClick = () => {
        setRow({});
        open({ onComplete: handleComplete });
    };

    return (
        <div>
            <h3>우편번호1</h3>

            <Form style={{ width: '600px' }} labelCol={{ span: 8, }} initialValues={row} key={row.postcode}>
            <Form.Item label="우편번호" name="postcode">
                    <Input />
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType='button' onClick={handleClick}>우편번호찾기</Button>
                </Form.Item>

               
                <Form.Item label="도로명주소" name="roadAddress"><Input /></Form.Item>
                <Form.Item label="지번주소" name="jibunAddress"><Input /></Form.Item>
                <Form.Item label="상세주소" name="detailAddress"><Input /></Form.Item >
                <Form.Item label="참고항목" name="extraAddress"><Input /></Form.Item >
               
            </Form >
        </div >
    );
}

export default Join3Page;