import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../features/posts/postSlice";
import { useNavigate } from "react-router-dom";
import { selectAllUsers } from "../features/users/userSlice";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(selectAllUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content && userId) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
      console.log(userId);
      navigate("/");
    }
  };

  const canSave = title && content && userId;

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
        <label htmlFor="authors">Authors:</label>
        <select
          id="authors"
          name="authors"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        >
          <option value="">Select your name</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="postContent">Content:</label>
        <input
          id="postContent"
          name="postContent"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" disabled={!canSave}>
          <span style={{ fontWeight: "bold" }}>Upload</span>
        </button>
      </form>
    </div>
  );
}
