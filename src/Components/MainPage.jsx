import React, { useEffect, useState } from "react";
import ModalBanner from "./ModalBanner";
import Nominations from "./Nominations";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { fetchSearchResults } from "../Services/api";
import Cookies from "universal-cookie";

const MainPage = () => {
  // child props
  const [searchParams, setSearchParams] = useState("");
  const [searchResults, setSearchResults] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [nominees, setNominees] = useState([]);
  const cookies = new Cookies();
  useEffect(() => {
    fetchSearchResults(searchParams.replace(/ /gi, "+")).then((json) => {
      if (json.Response === "True") {
        setSearchResults(json.Search);
        setSearchError(null);
      } else if (json.Error) {
        setSearchError(json.Error);
        setSearchResults(false);
      }
    });
    setTimeout(checkForNominees, 3000);
    // return setSearchParams("");
  }, [searchParams]);

  //   create custom hook for search
  // create hook to check and store localStorage for nominee list
  //   const handleResultsUpdate = (newResults) => {
  //     console.log(newResults);
  //   };

  const checkForNominees = () => {
    debugger;
    if (JSON.parse(cookies.get("ShoppiesNominees")).length > 0) {
      setNominees(JSON.parse(cookies.get("ShoppiesNominees")));
    }
  };

  const checkIfDuplicate = (movieData) => {
    for (let i = 0; i < nominees.length; i++) {
      let obj = nominees[i];
      if (obj.imdbID === movieData.imdbID) return false;
    }
    return true;
  };

  const handleAddNominee = (movieData) => {
    console.log(movieData);
    if (checkIfDuplicate(movieData) && nominees.length < 5)
      setNominees((prev) => [...prev, movieData]);
  };

  const handleRemoveNominee = (movieId) => {
    console.log(movieId);
    let newArr = [];
    for (let nominee of nominees) {
      if (nominee.imdbID != movieId.imdbID) {
        newArr.push(nominee);
      }
    }
    setNominees(newArr);
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
          error={searchError}
          searchParams={searchParams}
        />
        <Nominations
          nominees={nominees}
          handleRemoveNominee={handleRemoveNominee}
          cookies={cookies}
        />
      </div>
      {/* <ModalBanner /> */}
    </div>
  );
};

export default MainPage;
