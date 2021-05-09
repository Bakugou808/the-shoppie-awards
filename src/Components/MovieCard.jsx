import React from "react";

const MovieCard = ({ movieData, handleClick, btnText }) => {
  return (
    <div className="card card-width">
      <div className="card-image poster-container">
        <figure>
          <img
            className="movie-poster"
            src={movieData.Poster}
            alt="Movie Poster"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{movieData.Title}</p>
            <p className="subtitle is-6">{movieData.Year}</p>
          </div>
        </div>
        <div className="content">
          <button
            className="button is-primary"
            onClick={() => handleClick(movieData)}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
