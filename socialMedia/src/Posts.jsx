const Posts = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <img src={post.url} alt="" />
          <p>{post.datetime}</p>
          <p>{post.body.length <= 25 ? post.body : post.body.slice(0, 25)}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
