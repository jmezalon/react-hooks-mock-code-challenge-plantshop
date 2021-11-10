import React from "react";

function Search({ search, onHandleSearchChange }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={onHandleSearchChange}
      />
    </div>
  );
}

export default Search;
