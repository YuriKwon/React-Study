import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render의 역할: 브라우저에 있는 실제 DOM에 리액트 컴포넌트를 렌더링하겠다는 의미
// id가 root인 DOM을 선택해서,, 거기에 리액트 컴포넌트를 렌더링 결과물을 렌더링!!하는 것 (public/index.html에 있음.)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
