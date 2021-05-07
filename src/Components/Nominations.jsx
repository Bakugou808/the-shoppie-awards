import React, { useEffect } from "react";

const Nominations = ({ nominees, handleRemoveNominee }) => {
  useEffect(() => {
    // console.log("localStorage", nominees);
    // localStorage.setItem("ShoppiesNominees", JSON.stringify(nominees));
    // localStorage.setItem("ShoppiesNomineesNames", JSON.stringify(nomineeNames));
    // localStorage.setItem("testingLocal", JSON.stringify({ ...nominees }));
    // return addToCookie();
    // return localStorage.setItem("ShoppiesNominees", JSON.stringify(nominees));
  }, [nominees]);

  //   const cookies = new Cookies()

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
