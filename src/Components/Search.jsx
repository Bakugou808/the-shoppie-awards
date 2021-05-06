import React from "react";

const Search = (props) => {
  const { searchParams, setSearchParams } = props;
  return (
    <div id="search-comp-container">
      <div id="search-bar-cont">
        <input class="input is-link" type="text" placeholder="Link input" />
      </div>
    </div>
  );
};

export default Search;
