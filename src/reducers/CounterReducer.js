// 모든 컴포넌트에서 공유할 변수 초기화
const initialState = {
    count: 100,
    count1: 101,

};

// 전개연산자
//{count : 1000, count1 : 101} => {count : 200, count1 :101}
// {...state, count : 200} => {count :100, count1 : 101, count : 200}

// 모든 컴포넌트에서 숫자를 변경 또는 조회 기능을 구현현
const CounterReducer = (state = initialState, action) => {

    // 필요시에 count의 기존 숫자에서 1증가시키는 기능
    if (action.type === 'increment') {
        return {
            ...state,
            count: state.count + 1
        }

    }
    // count를 1으로 감소시키는 기능
    else if (action.type === 'decrement') {
        return {
            ...state,
            count: state.count - 1
        }
    }

     // count를 100으로 초기화 기능
     else if (action.type === 'reset') {
        return {
            ...state,
            count: 100
        }
    }

    
    // 위의 기능을 사용하지 않을 경우 defalt는 기존값 반환함
    else{
        return state;
    }
};

export default CounterReducer;