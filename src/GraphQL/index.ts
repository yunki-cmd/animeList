/* eslint-disable import/prefer-default-export */
import { gql } from "@apollo/client";

export const EXCHANGE_RATES = gql `
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }`;

export const ANIME_BY_ID = gql `
query getAnimeByID($id: Int) { # Define which variables will be used in the query (id)
  Media(id: $id) {
    id
    title {
     romaji
     english
     native
    }
    type
    format
    status
    description
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    season
    seasonYear
    episodes
    duration
    chapters
    countryOfOrigin
    isLicensed
    source
    trailer {
      id
      site
      thumbnail
    }
    coverImage {
      extraLarge
      large
      medium
      color
    }
    bannerImage
    genres
    synonyms
    averageScore
    meanScore
    popularity
    isLocked
    trending
    favourites
    tags {
      id
      name
      category
      description
      rank
      isGeneralSpoiler
      isMediaSpoiler
      isAdult
      userId
    }
    isAdult
    favourites
    rankings {
      id
      rank
      type
      format
      year
      season
      allTime
      context
    }
    stats {
      scoreDistribution {
        amount
        score
      }
    }
    siteUrl
  }
}
`;

export const ANIME_RELATION_BY_ID = gql`
query getAnimeRelation($mediaId: Int, $type: MediaType) {
    Media(id: $mediaId, type: $type) {
      id
      relations {
        edges {
          id
          node {
            id
            title {
              romaji
              english
              native
              userPreferred
            }
            type
            bannerImage
            coverImage {
              extraLarge
              large
              color
              medium
            }
          }
          relationType
        }
      }
    }
}`;

export const ANIME_TRENDINGS_EMISSION = gql `
query getListAnimeTrendingEmissions ($page: Int){
  Page(page: $page, perPage: 10) {
      pageInfo {
        total perPage currentPage lastPage hasNextPage
        }
  media(type: ANIME, status: RELEASING sort: [TRENDING_DESC, POPULARITY_DESC]) {
    id
      title{
        romaji
        english
        native
      }
      type
      format
      status
      description(asHtml:false)
      startDate{
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      episodes
      source
      hashtag
      trailer{
        id
        site
        thumbnail
      }
      coverImage{
        large
        medium
        color
        extraLarge
      }
      bannerImage
      popularity
      meanScore
      genres
  }
  }
}`;


export const SEARCH_ANIME = gql `
query searchAnime($page: Int, $perPage: Int, $search: String, $startDateGreater:
    FuzzyDateInt, $endDateLesser: FuzzyDateInt, $formatIn: [MediaFormat],
    $statusIn: [MediaStatus], $genreIn: [String]) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total perPage currentPage lastPage hasNextPage
    }
    media(search: $search,startDate_greater: $startDateGreater, endDate_lesser:
        $endDateLesser,
        format_in: $formatIn, status_in: $statusIn, genre_in: $genreIn) {
      id
      description
      title {
        english
      }
      type
      format
      status
      description
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      season
      seasonYear
      episodes
      duration
      chapters
      countryOfOrigin
      isLicensed
      source
      trailer {
        id
        site
        thumbnail
      }
      coverImage {
        extraLarge
        large
        medium
        color
      }
      bannerImage
      genres
      synonyms
      averageScore
      meanScore
      popularity
      isLocked
      trending
      favourites
      tags {
        id
        name
        category
        description
        rank
        isGeneralSpoiler
        isMediaSpoiler
        isAdult
        userId
      }
      isAdult
      rankings {
        id
        rank
        type
        format
        year
        season
        allTime
        context
      }
      stats {
        scoreDistribution {
          amount
          score
        }
      }
      siteUrl
    }
  }
}`;

export const ANIME_TRENDINGS = gql `
query(
  $page: Int = 1
  $id: Int 
  $type: MediaType 
  $isAdult: Boolean = false 
  $search: String 
  $format: [MediaFormat] 
  $status: MediaStatus 
  $countryOfOrigin: CountryCode 
  $source: MediaSource 
  $season: MediaSeason 
  $seasonYear: Int 
  $year: String 
  $onList: Boolean 
  $yearLesser:FuzzyDateInt 
  $yearGreater: FuzzyDateInt 
  $episodeLesser: Int 
  $episodeGreater: Int 
  $durationLesser: Int 
  $durationGreater: Int 
  $chapterLesser: Int 
  $chapterGreater: Int 
  $volumeLesser: Int 
  $volumeGreater: Int 
  $licensedBy: [Int] 
  $isLicensed: Boolean 
  $genres: [String] 
  $excludedGenres: [String] 
  $tags: [String] 
  $excludedTags: [String] 
  $minimumTagRank: Int 
  $sort: [MediaSort] = [POPULARITY_DESC,SCORE_DESC])
  {
  Page(page: $page, perPage: 20) {
    pageInfo {
      total perPage currentPage lastPage hasNextPage
    }
    media(id: $id type: $type season: $season format_in: $format status:
      $status countryOfOrigin: $countryOfOrigin source: $source search:
      $search onList: $onList seasonYear: $seasonYear startDate_like:
      $year startDate_lesser: $yearLesser startDate_greater:
      $yearGreater episodes_lesser: $episodeLesser episodes_greater:
      $episodeGreater duration_lesser: $durationLesser duration_greater:
      $durationGreater chapters_lesser: $chapterLesser chapters_greater:
      $chapterGreater volumes_lesser: $volumeLesser volumes_greater:
      $volumeGreater licensedById_in: $licensedBy isLicensed:
      $isLicensed genre_in: $genres genre_not_in: $excludedGenres tag_in:
      $tags tag_not_in: $excludedTags minimumTagRank:
      $minimumTagRank sort: $sort isAdult: $isAdult) {
      id title {
        userPreferred
      }
      coverImage {
        extraLarge large color
      }
      startDate {
        year month day
      }
      endDate {
        year month day
      }
      bannerImage season seasonYear description type format status(version: 2) episodes duration chapters volumes genres isAdult averageScore popularity nextAiringEpisode {
          airingAt timeUntilAiring episode
        }
      mediaListEntry {
        id status
      }
      studios(isMain: true) {
        edges {
          isMain node {
            id name
          }
        }
      }
    }
  }
}
`;

