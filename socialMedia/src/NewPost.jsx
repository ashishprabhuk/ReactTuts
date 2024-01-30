function NewPost({title, setTitle, body, setBody, handleSubmit}) {
  return (
    <div className="newPost">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          required
          autoFocus
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="body">Post:</label>
        <textarea
          type="text"
          id="body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" className="submitBtn">Post</button>
      </form>
    </div>
  );
}

export default NewPost;
