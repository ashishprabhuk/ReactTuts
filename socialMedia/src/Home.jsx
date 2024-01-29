import { Link } from "react-router-dom";
import Feed from "./Feed";
import "./App.css";

const Home = ({ posts }) => {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {posts.length ? <Feed posts={posts} /> : <p>No Posts to display</p>}
    </main>
  );
};

export default Home;
