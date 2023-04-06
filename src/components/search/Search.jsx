import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

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
    <form onSubmit={handleSubmit}>
      <label htmlFor='search'>Search by brand or model:</label>
      <input
        type='text'
        id='search'
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default Search;
