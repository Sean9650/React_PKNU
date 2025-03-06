
// 로그인의 상태 0 또는 1, token 백엔드에서 전송되는 키값
const inititalState = {
    logged: 0,
    token: '',
}

const LoginReducer = (state = inititalState, action) => {

    // 로그인
    if (action.type === 'login') {
        sessionStorage.setItem("TOKEN", action.token);
        return {
            ...state,
            logged: 1,
            token: action.token
        }

    }

    // fhrmdkdnt => dispatch ({type : 'logout'})
    else if (action.type === 'logout') {
        sessionStorage.removeItem("TOKEN");
        return {
            ...state,
            logged: 0,
            token: ''
        }
    }

    // 현재 상태를 반환함
    else {
        const token = sessionStorage.getItem("TOKEN");
        if (token !== null) {
            state.logged = 1;
            state.token = token;
        }
        return state;
    }
}
export default LoginReducer;
