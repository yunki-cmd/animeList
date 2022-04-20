/* eslint-disable import/prefer-default-export */



export function getSearchResult({ query = "",page = 1,perPage= 25 }) {


  if (query === "") {
    return fetch(
      `https://api.aniapi.com/v1/anime?page=${page}&per_page=${perPage}`);
  } 
  return fetch(`https://api.aniapi.com/v1/anime?title=${query}&page=${page}&per_page=${perPage}`);
}