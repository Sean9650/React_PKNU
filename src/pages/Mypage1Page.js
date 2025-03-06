import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { current } from '@reduxjs/toolkit';
import { Outlet, useNavigate } from 'react-router-dom';


const Mypage1Page = () => {

    const navigate = useNavigate()
    const [current, setCurrent] = useState('menu1');

    const items = [
        {
            label: '정보변경',
            key: 'menu1',
            icon: <MailOutlined />
        },

        {
            label: '암호변경',
            key: 'menu2',
            icon: <MailOutlined />
        },

        {
            label: '회원탈퇴',
            key: 'menu3',
            icon: <MailOutlined />
        }
    ];

    useEffect(() => {
        navigate(`/mypage1/${current}`);
    }, [current]);

    const onClick = (e) => {
        console.log(e)
        setCurrent(e.key);
    }


    return (
        <div>
            <h3>마이페이지</h3>
            <Menu mode="horizontal" onClick={onClick} selectekeys={[current]} items={items} />

            <Outlet />
        </div>
    );
};

export default Mypage1Page;