import React, { useEffect, useState } from "react";
import ModalBanner from "./ModalBanner";
import Nominations from "./Nominations";
import Search from "./Search";
import SearchResults from "./SearchResults";

const MainPage = () => {
  // child props
  const [searchParams, setSearchParams] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nominees, setNominees] = useState([]);

  //   create custom hook for search
  // create hook to check and store localStorage for nominee list
  const handleResultsUpdate = (newResults) => {
    console.log(newResults);
  };

  const handleAddNominee = (movieData) => {
    console.log(movieData);
  };

  const handleRemoveNominee = (movieId) => {
    console.log(movieId);
  };

  return (
    <div>
      <h1 id="main-page-title" className="title">
        The Shoppies
      </h1>
      <div id="main-page-layout">
        <Search searchParams={searchParams} setSearchParams={setSearchParams} />
        <SearchResults
          results={searchResults}
          handleAddNominee={handleAddNominee}
        />
        <Nominations
          nominees={nominees}
          handleRemoveNominee={handleRemoveNominee}
        />
      </div>
      {/* <ModalBanner /> */}
    </div>
  );
};

export default MainPage;
