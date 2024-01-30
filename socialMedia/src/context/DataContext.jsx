import axios from "axios";
import { format } from "date-fns/format";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxios";

// Create the DataContext
const DataContext = createContext();

// Create a DataProvider component
export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [title, setTitle] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [body, setBody] = useState("");
  const [editBody, setEditBody] = useState("");
  const URL = "http://localhost:8000";
  const { data, fetchError, isLoading } = useAxiosFetch(`${URL}/posts`);
  const IMG = "https://via.placeholder.com/300/333333";
  const navigate = useNavigate();

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const searchPost = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(searchPost.reverse());
  }, [search, posts]);

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
      navigate(`/post/${id}`);
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
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        search,
        setSearch,
        searchResults,
        setSearchResults,
        title,
        setTitle,
        editTitle,
        setEditTitle,
        body,
        setBody,
        editBody,
        setEditBody,
        data,
        fetchError,
        isLoading,
        handleEdit,
        handleDelete,
        handleSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
