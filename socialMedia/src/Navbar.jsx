import { Link } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaLaptop, FaMobile, FaPlus, FaTablet, FaUser} from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";
const Navbar = ({ title, search, setSearch }) => {
  const { width } = useWindowSize();
  return (
    <>
      <nav className="navbar">
        <ul className="header">
          <Link to="/" className="button">
            <h1 className="insta">{title}</h1>
          </Link>
          <div className="button-container">
            <Link to="/" className="button">
              <button className="button">
                <GoHomeFill />
              </button>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/post" className="button">
              <button className="button">
                <FaPlus />
              </button>
            </Link>
          </div>
          <div className="button-container">
            <Link to="/about" className="button">
              <button className="button">
                <FaUser />
              </button>
            </Link>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search" className="lSearch">
              Search
            </label>
            <input
              id="search"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          {width < 768 ? (
            <FaMobile style={{fontSize:"20px"}}/>
          ) : width < 992 ? (
            <FaTablet style={{fontSize:"20px"}}/>
          ) : (
            <FaLaptop style={{fontSize:"20px"}}/>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
