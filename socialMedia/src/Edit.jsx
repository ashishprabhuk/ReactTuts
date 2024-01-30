import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const Edit = () => {
  const { posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit } =
    useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="newPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => handleEdit(post.id)}
              className="submitBtn"
            >
              Update
            </button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>
            <Link to="/">Go to Home</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default Edit;
