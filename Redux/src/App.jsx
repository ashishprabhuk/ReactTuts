import { useState } from "react";
import "./index.css";
import PostList from "./components/PostsList";
import { Routes, Route } from "react-router-dom";
import AddPost from "./components/AddPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post" element={<AddPost />} />
      </Routes>
    </>
  );
}

export default App;
