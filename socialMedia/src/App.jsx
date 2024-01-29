import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import Navbar from "./Navbar";
import "./App.css";
import { useState } from "react";
import NewPost from "./NewPost";
import NotFound from "./NotFound";
import Footer from "./Footer";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 A.M",
      body: "Made a video about Tesla QI results and how they are not as good as they seem.",
      url: "https://via.placeholder.com/250/771796",
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "Aril 21, 2003 A.M",
      body: "Second post body",
      url: "https://via.placeholder.com/250/771796",
    },
  ]);
  
  return (
    <>
      <Navbar title="Instagram" search={search} setSearch={setSearch} />
      <Home posts={posts}/>
      <Posts posts={posts}/>
      <NewPost />
      <NotFound/>
      <About />
      <Footer/>
      {/* <Routes>
        <Route path="/" element={<Home posts={posts}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts posts={posts}/>} />
        <Route path="/list" element={<NewPost />} />
      </Routes> */}
    </>
  );
}

export default App;
