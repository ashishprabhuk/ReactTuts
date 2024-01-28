import { Link } from "react-router-dom";

const Navbar = ({ title, search, setSearch }) => {
  return (
    <>
      <nav className="navbar">
        <ul className="header">
          <h1>{title}</h1>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/posts" className="link">
              Posts
            </Link>
          </li>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search">Search</label>
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
