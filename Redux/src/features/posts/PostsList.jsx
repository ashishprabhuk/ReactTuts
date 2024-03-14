import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  return (
    <>
      <section>
        <h1>POST</h1>
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <PostAuthor userId={post.userId} />
              </article>
            </div>
          );
        })}
        <div className="btn">
          <Link to="/post">
            <button><b>Add +</b></button>
          </Link>
        </div>
      </section>
    </>
  );
}
