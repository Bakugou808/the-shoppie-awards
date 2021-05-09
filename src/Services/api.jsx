const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=`;

export async function fetchSearchResults(param) {
  console.log("url", URL);
  const resp = await fetch(`${URL}${param}`);

  return await resp.json();
}
