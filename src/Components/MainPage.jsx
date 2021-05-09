import React, { useEffect, useState } from "react";
import ModalBanner from "./ModalBanner";
import Nominations from "./Nominations";
import Search from "./Search";
import SearchResults from "./SearchResults";
import { fetchSearchResults } from "../Services/api";

const MainPage = () => {
  const [searchParams, setSearchParams] = useState("");
  const [searchResults, setSearchResults] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [nominees, setNominees] = useState([]);
  const [bannerOn, setBannerOn] = useState(false);

  useEffect(() => {
    fetchSearchResults(searchParams.replace(/ /gi, "+")).then((json) => {
      if (json.Response === "True") {
        setSearchResults(json.Search);
        setSearchError(null);
      } else if (json.Error) {
        if (json.Error === "Incorrect IMDb ID.") {
          setSearchError("Search to see results!");
        } else {
          setSearchError(json.Error);
        }
        setSearchResults(false);
      }
    });
    localStorage.getItem("ShoppiesNominees") && checkForNominees();
  }, [searchParams]);

  useEffect(() => {
    nominees.length > 4 ? setBannerOn(true) : setBannerOn(false);
  }, [nominees]);

  const checkForNominees = () => {
    if (JSON.parse(localStorage.getItem("ShoppiesNominees")).length > 0) {
      setNominees(JSON.parse(localStorage.getItem("ShoppiesNominees")));
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
    if (checkIfDuplicate(movieData) && nominees.length < 5) {
      localStorage.setItem(
        "ShoppiesNominees",
        JSON.stringify([...nominees, movieData])
      );
      setNominees((prev) => [...prev, movieData]);
    }
  };

  const handleRemoveNominee = (movieId) => {
    let newArr = [];
    for (let nominee of nominees) {
      if (nominee.imdbID != movieId.imdbID) {
        newArr.push(nominee);
      }
    }
    setNominees(newArr);
    localStorage.setItem("ShoppiesNominees", JSON.stringify(newArr));
  };

  return (
    <div className="container margin-30px">
      <h1 id="main-page-title" className="title">
        The Shoppies
      </h1>
      {bannerOn && <ModalBanner />}

      <div id="main-page-layout">
        <Search searchParams={searchParams} setSearchParams={setSearchParams} />
        {nominees.length > 0 && (
          <Nominations
            nominees={nominees}
            handleRemoveNominee={handleRemoveNominee}
          />
        )}
        <SearchResults
          results={searchResults}
          handleAddNominee={handleAddNominee}
          error={searchError}
          searchParams={searchParams}
        />
      </div>
    </div>
  );
};

export default MainPage;
