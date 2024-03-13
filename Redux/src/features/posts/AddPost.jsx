import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
      navigate("/");
    }
  };

  return (
    <div>
      <form className="addPost" onSubmit={handleSubmit}>
        <h1>Add New Post</h1>
        <label htmlFor="postTitle">Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="postContent">Content:</label>
        <input
          id="postContent"
          name="postContent"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">
          <b>Upload</b>
        </button>
      </form>
    </div>
  );
}
