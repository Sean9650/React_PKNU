// 1.reducers / CounterReducer.js 한곳으로 모음

import { combineReducers } from "redux";
import CounterReducer from "./reducers/CounterReducer";
import LoginReducer from "./reducers/LoginReducer";


const RootReducer = combineReducers({
    CounterReducer,
    LoginReducer
})

export default RootReducer;