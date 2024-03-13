import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postSlice";
import { Link } from "react-router-dom";

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
