import React from "react";
import MovieCard from "./MovieCard";

const SearchResults = (props) => {
  const { results, handleAddNominee, error, searchParams } = props;

  const renderResults = () => {
    console.log(results);
    return results.map((movie, i) => {
      return (
        <MovieCard
          key={`${i}${movie.imdbID}`}
          handleClick={handleAddNominee}
          movieData={movie}
          btnText="Nominate This Film!"
        />
      );
    });
  };

  return (
    <div id="results-container">
      {results && <p className="title is-4">Results for "{searchParams}"</p>}
      <div id="results-section">
        {results && renderResults()}
        {error && <h2>{error}</h2>}
      </div>
    </div>
  );
};

export default SearchResults;
