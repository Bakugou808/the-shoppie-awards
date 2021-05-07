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
          <MovieCard handleClick={handleRemoveNominee} movieData={nominee} />
        </div>
      );
    });
  };

  return (
    <div id="nominations-cont">
      <h2 className="title is-3">Nominees</h2>
      <p className="subtitle is-6 pointer" onClick={toggleNominees}>
        (click to hide nominees)
      </p>

      {toggle && (
        <div id="nominations-section">{nominees && renderNominees()}</div>
      )}
    </div>
  );
};

export default Nominations;
