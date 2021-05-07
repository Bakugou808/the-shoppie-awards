const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};

export async function fetchSearchResults(param) {
  console.log("in fetch", API_KEY, `${URL}${param}`);
  const resp = await fetch(`${URL}${param}`);

  return await resp.json();
}
