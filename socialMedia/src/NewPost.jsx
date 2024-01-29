import React, { useState } from "react";

function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBody("");
    setTitle("");
  };

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value())}
        />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value())}
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value())}
        />
        <button type="submit" className="submitBtn">Post</button>
      </form>
    </div>
  );
}

export default NewPost;
