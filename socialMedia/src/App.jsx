import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import Edit from "./Edit";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewPost from "./NewPost";
import NotFound from "./NotFound";
import format from "date-fns/format";
import PostPage from "./PostPage";
import useAxios from "./hooks/useAxios";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const URL = "http://localhost:8000";
  const { data, fetchError, isLoading } = useAxios(`${URL}/posts`);
  const IMG = "https://via.placeholder.com/300/333333";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${URL}/posts`);
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const searchPost = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(searchPost.reverse());
  }, [search, posts]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length
      ? (parseInt(posts[posts.length - 1].id, 10) + 1).toString()
      : "1";
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id,
      title: title,
      datetime,
      body: body,
      url: IMG,
    };
    try {
      const addPost = await axios.post(`${URL}/posts`, newPost);
      const allPosts = [...posts, addPost.data];
      setPosts(allPosts);
      setBody("");
      setTitle("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id,
      title: editTitle,
      datetime,
      body: editBody,
      url: IMG,
    };
    try {
      const response = await axios.put(`${URL}/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}/posts/${id}`);
      const deletePost = posts.filter((post) => post.id !== id);
      setPosts(deletePost);
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <Navbar title="Instagram" search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home searchResults={searchResults} fetchError={fetchError} isLoading={isLoading}/>} />
        <Route path="post">
          <Route
            index
            element={
              <NewPost
                title={title}
                setTitle={setTitle}
                body={body}
                setBody={setBody}
                handleSubmit={handleSubmit}
              />
            }
          />
          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route
          path="edit/:id"
          element={
            <Edit
              posts={posts}
              editTitle={editTitle}
              setEditTitle={setEditTitle}
              editBody={editBody}
              setEditBody={setEditBody}
              handleEdit={handleEdit}
            />
          }
        ></Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
