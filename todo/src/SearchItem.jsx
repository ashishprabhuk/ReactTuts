import { FiSearch } from "react-icons/fi";

export default function SearchItem({ search, setSearch }) {
  return (
    <>
      <form
        className="searchForm"
        type="submit"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="searchBox"
          type="text"
          placeholder="Search..."
          name="search"
          id="searchItem"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="searchBtn" type="submit">
          <FiSearch />
        </button>
      </form>
    </>
  );
}
