/* eslint-disable import/prefer-default-export */



export function getSearchResult({ query = "" }) {
  if (query === "") {
    return fetch("https://api.aniapi.com/v1/anime");
  } 
  return fetch(`https://api.aniapi.com/v1/anime?title=${query}`);
}