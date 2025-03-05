import { Button, Upload } from 'antd';
import React, { useState } from 'react';

import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

const ItemInsertPage = () => {

    // 상태변수 [{uid, name, status, url}, {uid, name, status, url}, {uid, name, status, url}]
    const [fileList, setFileList] = useState([]);

    //파일을 첨부했을때 이벤트
    const onChange = (e) => {
        console.log(e);
        if (e.fileList.length > 0) {
            setFileList([{
                uid: '-1',
                name: e.fileList[0].name,
                status: 'done',
                url: URL.createObjectURL(e.fileList[0].originFileObj),
                file : e.fileList[0].originFileObj, // 파일 정보
                
            }])
        }
        else {
            setFileList([]);
        }
    }

    // 파일을 첨부 시 자동으로 백엔드로 이미지를 전송하는것을 방지
    const customRequest = () => {
        console.log('customRequest')
    }

    return (
        <div>
            <Upload
                listType="picture"
                fileList={fileList}
                onChange={onChange}
                customRequest={customRequest}
                maxCount={1}
            >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
        </div>
    );


};

export default ItemInsertPage;