import React from "react";

const SearchResults = (props) => {
  const { results, handleAddNominee, error, searchParams } = props;

  const renderResults = () => {
    console.log(results);
    return results.map((movie, i) => {
      let show = false;
      return (
        <div key={`${i}${movie.imdbID}`}>
          {/* <img className="poster-img" src={movie.Poster} alt="movie poster" /> */}
          <li>
            "{movie.Title}" - {movie.Year}
          </li>
          <button
            className="button is-primary"
            onClick={() => handleAddNominee(movie)}
          >
            Nominate!
          </button>
        </div>
      );
    });
  };

  return (
    <div>
      {results && <p>Results for "{searchParams}"</p>}
      <div>
        {results && renderResults()}
        {error && <h2>{error}</h2>}
      </div>
    </div>
  );
};

export default SearchResults;
