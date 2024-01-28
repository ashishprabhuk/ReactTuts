import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import PostLists from "./PostLists";
import Navbar from "./Navbar";
import "./App.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 A.M",
      body: "Made a video about Tesla QI results",
      url: "https://via.placeholder.com/250/771796",
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "July 01, 2021 A.M",
      body: "Made a video about Tesla QI results",
      url: "https://via.placeholder.com/250/771796",
    },
  ]);
  
  return (
    <>
      <Navbar title="Instagram" search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts posts={posts}/>} />
        <Route path="/list" element={<PostLists />} />
      </Routes>
    </>
  );
}

export default App;
