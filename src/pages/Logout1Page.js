import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Logout1Page = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // [] 로그아웃 페이지 실행 시 최초 1회 실행
    useEffect(() => {
        if (window.confirm('로그아웃할래?')) {
            dispatch({ type: 'logout' });
            navigate('/');
        }
        else {
            navigate(`/login1`);
        }
    }, []);
    return (
        <div>

        </div>
    );
};

export default Logout1Page;