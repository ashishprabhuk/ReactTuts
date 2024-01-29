import { Link } from "react-router-dom";

const Navbar = ({ title, search, setSearch }) => {
  return (
    <>
      <nav className="navbar">
        <ul className="header">
          <h1>{title}</h1>
          <div className="button-container">
            <Link to="/" className="button">
              <button className="button">Home</button>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/posts" className="button">
              <button className="button">Posts</button>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/about" className="button">
              <button className="button">About</button>
            </Link>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" className="lSearch">Search</label>
            <input
              id="search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
