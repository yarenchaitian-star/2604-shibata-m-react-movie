import React from "react";
import SignUpPage from "./feature/SighUp/SignUpPage";
import ListPage from "./feature/ListPage";
import DetailPage from "./feature/DetailPage/DetailPage";
import GenreListPage from "./feature/GenreList";
import MyPage from "./feature/MyPage";
import Layout from "./layouts/Layout";

import { Routes, Route, } from 'react-router-dom';

const App: React.FC = () => {


  return (
    <>
      <Layout>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/list" element={<ListPage />} /> {/* 遷移先 */}
          <Route path="/" element={<SignUpPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/genres" element={<GenreListPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Layout>
    </>
  );
};
export default App;