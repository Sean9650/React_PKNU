import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import BoardPage from './pages/BoardPage';
import BoardContentPage from './pages/BoardContentPage';
import BoardWritePage from './pages/BoardWritePage';

const App = () => {
  return (
    <div style={{ margin: '10px' }}>
      <h3>App</h3>
      <hr />
      <div>
        <Link to="/"><button>홈</button></Link>
        <Link to="/login"><button>로그인</button></Link>
        <Link to="/join"><button>회원가입</button></Link>
        <Link to="/board"><button>게시판</button></Link>
        <Link to="/boardwrite"><button>글쓰기</button></Link>
        <Link to="/boardcontent"><button>글내용</button></Link>
      </div>

      <hr />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/boardwrite" element={<BoardWritePage />} />
          <Route path="/boardcontent" element={<BoardContentPage />} />
        </Routes>
      </div>
    </div>

  );
};

export default App;