import Feed from "./Feed";
import { MutatingDots } from "react-loader-spinner";
import "./App.css";
import { useContext } from "react";
import DataContext from "./context/DataContext";

const Home = () => {
  const { searchResults, isLoading, fetchError }= useContext(DataContext);
  return (
    <main>
      {isLoading && (
        <div className="loading">
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#0092ee"
            secondaryColor="#0073ff"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className="noPost">No posts to display.</p>
        ))}
    </main>
  );
};

export default Home;
