import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "../features/posts/postSlice";
import { selectAllUsers } from "../features/users/userSlice";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import { TimeAgo } from "./TimeAgo";
import Reactions from "./Reactions";

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  const lastPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section>
        <h1>POST</h1>
        {lastPost.map((post) => {
          return (
            <div className="post" key={post.id}>
              <article key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <div className="authTime">
                  <PostAuthor userId={post.userId} />
                  <TimeAgo timestamp={post.date} />
                </div>
                <Reactions post={post}/>
              </article>
            </div>
          );
        })}
        <div className="btn">
          <Link to="/post">
            <button>
              <b>Add +</b>
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
