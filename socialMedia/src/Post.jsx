import { Link } from "react-router-dom";

const Post = ({ post }) => {
  if (!post) {
    return `No post found`;
  }
  return (
    <>
      <article>
        <Link to={`post/${post.id}`}>
          <h3>{post.title}</h3>
          <p className="datetime">{post.datetime}</p>
          <img src={post.url} alt="post img" />
        </Link>
        <p>
          {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
        </p>
      </article>
    </>
  );
};

export default Post;
