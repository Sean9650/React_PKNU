import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
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
import CounterPage from './pages/CounterPage';
import { useSelector } from 'react-redux';
import Login1Page from './pages/Login1Page';
import Logout1Page from './pages/Logout1Page';
import Mypage1Page from './pages/Mypage1Page';
import Menu100 from './pages/mypage/Menu100';
import Menu101 from './pages/mypage/Menu101';
import Menu102 from './pages/mypage/Menu102';
import Join2Page from './pages/Join2Page';
import Join3Page from './pages/Join3Page';
import KakaoMapPage from './pages/KakaoMapPage';
import ChatPage from './pages/ChatPage';



const App = () => {

  // CounterReducer에 있는 설정된 count, count1값을 실시간 가져오기
  const { count, count1 } = useSelector((state) => state.CounterReducer);
  console.log(`app.js=>`, count, count1)

  const { logged, token } = useSelector((state) => state.LoginReducer);


  return (
    <div style={{ margin: '10px' }}>
      <h3>App</h3>
      {count},{count1}, {logged}, {token}
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
        <Link to="/counter"><button>숫자증가</button></Link>
        <Link to="/join2"><button>우편번호</button></Link>
        <Link to="/join3"><button>우편번호1</button></Link>
        <Link to="/kakaomap"><button>카카오맵</button></Link>
        <Link to="/chat"><button>채팅</button></Link>
        <br /><br />
        {logged === 0 && <Link to="/login1"><button>로그인</button></Link>}
        {logged === 1 && <Link to="/logout1"><button>로그아웃</button></Link>}
        {logged === 1 && <Link to="/mypage1"><button>마이페이지</button></Link>}
      </div>

      <hr />


      <div>
        <Routes>

          <Route path="/login1" element={logged === 0 && <Login1Page />} />
          <Route path="/logout1" element={logged === 1 ? <Logout1Page /> : <Navigate to="/login1" replace />} />
          <Route path="/mypage1" element={logged === 1 ? <Mypage1Page /> : <Navigate to="/login1" replace />} >
          <Route path="menu1" element={<Menu100/>} />
            <Route path="menu2" element={<Menu101/>} />
            <Route path="menu3" element={<Menu102/>} />
          </Route>

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
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/join2" element={<Join2Page />} />
          <Route path="/join3" element={<Join3Page />} />
          <Route path="/kakaomap" element={<KakaoMapPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </div>

  );
};

export default App;