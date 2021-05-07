import React, { useState } from "react";
import { fetchSearchResults } from "../Services/api";

const Search = (props) => {
  const { searchParams, setSearchParams } = props;
  const [results, setResults] = useState({});

  const handleOnChange = (e) => {
    let input = e.target.value;
    setSearchParams(input);
  };

  return (
    <div id="search-comp-container">
      <div id="search-bar-cont">
        <input
          className="input is-link"
          onChange={handleOnChange}
          type="text"
          placeholder="Link input"
          value={searchParams}
        />
      </div>
    </div>
  );
};

export default Search;
