const Posts = ({ post }) => {
  if (!post) {
    return null;
  }
  return (
    <>
      {post.length ? (<article>
        <h3>{post.title}</h3>
        <img src={post.url} alt="post img" />
        <p className="datetime">{post.datetime}</p>
        <p>
          {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
        </p>
      </article>) : <p>No posts to show</p>}
    </>
  );
};

export default Posts;
