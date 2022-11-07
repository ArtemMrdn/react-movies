import React, { useState } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div class='row'>
      <div class='input-field'>
        <input
          className='validate'
          type='search'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className='btn search-btn'
          onClick={() => this.props.searchMovies(search, type)}
        >
          Search
        </button>
      </div>
      <div>
        <p>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='all'
              onChange={handleFilter}
              checked={type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='movie'
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
              data-type='series'
              onChange={handleFilter}
              checked={type === "series"}
            />
            <span>Series only</span>
          </label>
        </p>
      </div>
    </div>
  );
};

export default Search;
