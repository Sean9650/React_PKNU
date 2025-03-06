import { Button, Space } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CounterPage = () => {

    const dispatch = useDispatch();
    const { count, count1 } = useSelector((state) => state.CounterReducer);

    const handlePlus = () => {
        dispatch({ type: 'increment' });
    }

    const handleMinus = () => {
        dispatch({ type: 'decrement' });
    }

    const handleReset = () => {
        dispatch({ type: 'reset' });
    }

    return (
        <div>
            <h3>숫자변경 예제</h3>
            {count}, {count1}
            <hr />
            <Space>
                <Button type="primary" onClick={handlePlus}>1증가</Button>
                <Button type="primary" onClick={handleMinus}>1감소</Button>
                <Button type="primary" onClick={handleReset}>1초기화</Button>
            </Space>
        </div>
    );
};

export default CounterPage; <h3>숫자변경 예제</h3>