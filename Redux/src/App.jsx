import { useState } from "react";
import "./index.css";
import PostList from "./features/posts/PostsList";
import { Routes, Route } from "react-router-dom";
import AddPost from "./features/posts/AddPost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="post" element={<AddPost />} />
      </Routes>
    </>
  );
}

export default App;
