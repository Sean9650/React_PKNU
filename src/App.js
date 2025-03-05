import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import BoardPage from './pages/BoardPage';
import BoardContentPage from './pages/BoardContentPage';
import BoardWritePage from './pages/BoardWritePage';
import BoardInsertPage from './pages/BoardInsertPage';
import MemberListPage from './pages/MemberListPage';
import Join1Page from './pages/Join1Page';
import ItemListPage from './pages/ItemListPage';
import ItemInsertPage from './pages/ItemInsertPage';
import ItemInsert1Page from './pages/ItemInsert1Page';
import ItemUpdatePage from './pages/ItemUpdatePage';



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
        <Link to="/boardinsert"><button>글쓰기1</button></Link>
        <Link to="/memberlist"><button>회원목록</button></Link>
        <Link to="/itemlist?page=1&text="><button>물품목록</button></Link>
        <Link to="/join1"><button>회원가입1</button></Link>
        <Link to="/iteminsert"><button>물품등록</button></Link>
        <Link to="/iteminsert1"><button>물품등록1</button></Link>
        <Link to="/itemupdate"><button>물품변경</button></Link>
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
          <Route path="/boardinsert" element={<BoardInsertPage />} />
          <Route path="/memberlist" element={<MemberListPage />} />
          <Route path="/itemlist" element={<ItemListPage />} />
          <Route path="/iteminsert" element={<ItemInsertPage />} />
          <Route path="/iteminsert1" element={<ItemInsert1Page />} />
          <Route path="/itemupdate" element={<ItemUpdatePage />} />
        </Routes>
      </div>
    </div>

  );
};

export default App;