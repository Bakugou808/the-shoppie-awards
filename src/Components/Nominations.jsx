import React, { useState } from "react";
import MovieCard from "./MovieCard";

const Nominations = ({ nominees, handleRemoveNominee }) => {
  const [toggle, setToggle] = useState(true);

  const toggleNominees = () => {
    setToggle(!toggle);
  };

  const renderNominees = () => {
    return nominees.map((nominee) => {
      return (
        <div>
          <p>Nominated</p>
          <MovieCard
            handleClick={handleRemoveNominee}
            movieData={nominee}
            btnText="Remove Film From Nominees."
          />
        </div>
      );
    });
  };

  return (
    <div id="nominations-cont">
      <h2 className="title is-4">Nominees</h2>
      {toggle ? (
        <p className="subtitle is-6 pointer" onClick={toggleNominees}>
          (click to hide nominees)
        </p>
      ) : (
        <p className="subtitle is-6 pointer" onClick={toggleNominees}>
          (click to show nominees)
        </p>
      )}

      {toggle && (
        <div id="nominations-section">{nominees && renderNominees()}</div>
      )}
    </div>
  );
};

export default Nominations;
