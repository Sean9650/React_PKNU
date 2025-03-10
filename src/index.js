import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// router 환경설정
import { BrowserRouter } from 'react-router-dom';

// redux 환경설정
import { configureStore } from '@reduxjs/toolkit';
import RootReducer from './reducer';
import { Provider } from 'react-redux';
const store = configureStore({ reducer: RootReducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
