import Post from "./Post";

const Feed = ({ posts }) => {
  return (
    <main className="postbox">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
};

export default Feed;
