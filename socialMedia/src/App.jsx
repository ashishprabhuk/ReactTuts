import { Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext.jsx";
import Home from "./Home";
import Edit from "./Edit";
import About from "./About";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NewPost from "./NewPost";
import NotFound from "./NotFound";
import PostPage from "./PostPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Navbar title="Instagram" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPage />} />
          </Route>
          <Route path="edit/:id" element={<Edit />}></Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
