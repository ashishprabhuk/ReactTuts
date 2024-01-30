import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./context/DataContext";

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  return (
    <article>
      {post && (
        <div className="content">
          <h3>{post.title}</h3>
          <p className="datetime">{post.datetime}</p>
          <img src={post.url} alt="post img" />
          <p style={{ textAlign: "justify", margin: "0px 40px" }}>
            {post.body}
          </p>
          <div className="btns">
            <Link to={`/edit/${post.id}`}>
              <button className="editBtn">Edit Post</button>
            </Link>
            <button className="deleteBtn" onClick={() => handleDelete(post.id)}>
              Delete Post
            </button>
          </div>
        </div>
      )}
      {!post && (
        <>
          <h2>Post Not Found</h2>
        </>
      )}
    </article>
  );
};

export default PostPage;
