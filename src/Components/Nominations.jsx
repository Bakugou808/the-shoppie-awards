import React from "react";

const Nominations = ({ nominees, handleRemoveNominee }) => {
  const renderNominees = () => {
    return nominees.map((nominee) => {
      return (
        <div>
          <li>Nominated: {nominee.Title}</li>
          <button
            className="button is-primary"
            onClick={() => handleRemoveNominee(nominee)}
          >
            Remove Nomination.
          </button>
        </div>
      );
    });
  };

  return <div>{nominees && renderNominees()}</div>;
};

export default Nominations;
