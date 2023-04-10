import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./Search.scss";
/* Component for the search bar*/

// eslint-disable-next-line react/prop-types
const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    handleSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="search" className="search-label">
        <BiSearchAlt className="search-icon" />
      </label>
      <input
        className="search-input"
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
