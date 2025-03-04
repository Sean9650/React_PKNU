import React from 'react';

const Menu1 = (props) => {

    console.log('Menu1.js =>', props)

    return (
        <div>
            <p>menu1</p>
            <p>{props.str}</p>
            <p>{props.num}</p>
            <button onClick={() => props.myFunc('Hello')}>버튼</button>
        </div>
    );
};

export default Menu1;