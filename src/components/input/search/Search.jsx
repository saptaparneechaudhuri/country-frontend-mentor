import "./search.css";
import { useEffect, useState } from "react";

const Search = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    handleSearch(searchValue);
  }, [searchValue]);

  return (
    <section className="search-container">
      <div className="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={searchValue}
        onChange={handleInputValueChange}
      />
    </section>
  );
};

export default Search;
