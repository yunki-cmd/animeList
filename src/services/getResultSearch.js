/* eslint-disable import/prefer-default-export */


export function getSearchResult({ query = "",page = 1,perPage= 25 }) {

  if (query === "") {
    return fetch(
      `https://api.aniapi.com/v1/anime?formats=0,1&status=1&year=2022&nsfw=true&with_episodes=false`);
  } 
  return fetch(`https://api.aniapi.com/v1/anime?title=${query}&page=${page}&per_page=${perPage}`);
}
