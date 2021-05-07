import React, { useEffect } from "react";

const Nominations = ({ nominees, cookies, handleRemoveNominee }) => {
  useEffect(() => {
    // console.log("localStorage", nominees);
    // localStorage.setItem("ShoppiesNominees", JSON.stringify(nominees));
    // localStorage.setItem("testingLocal", JSON.stringify({ ...nominees }));
    addToCookie();
    // return localStorage.setItem("ShoppiesNominees", JSON.stringify(nominees));
  }, [nominees]);

  //   const cookies = new Cookies()

  const addToCookie = () => {
    // let cart = JSON.parse(localStorage.getItem("ShoppiesNominees"));
    // localStorage.setItem("ShoppiesNominees", JSON.stringify(nominees));
    cookies.set("ShoppiesNominees", JSON.stringify(nominees), { path: "/" });
  };

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
