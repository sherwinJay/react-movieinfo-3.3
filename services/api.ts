import { movieDbURL } from "@/constant"
import { SearchData } from "@/types"
import axios, { GenericAbortSignal } from "axios"

type FetchSearchType = {
  searchVal: string
  signal?: AbortSignal | undefined
}

export const getSearchGames = async ({
  searchVal,
  signal,
}: FetchSearchType) => {
  const movieApi = `${movieDbURL}/3/search/multi?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&query=${searchVal}&page=1&include_adult=false`

  try {
    const response = await axios.get(movieApi, { signal })

    const data = response.data.results
    return data as SearchData[]
  } catch (error) {
    // return []
    // console.log(error)
  }
}

export async function fetchHomePageMovies(url: string) {
  try {
    const res = await fetch(url, { cache: "no-store" })

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
    }

    const homePageMovieData = await res.json()

    const homePageMovieList = homePageMovieData?.results

    return homePageMovieList
  } catch (error) {
    console.log(error)
  }
}

export async function fetchRecommendMovies(
  pageId: string | number,
  mediaType: string
) {
  try {
    const res = await fetch(
      `${movieDbURL}/3/${mediaType}/${pageId}/recommendations?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`,
      { cache: "no-store" }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch recommend data")
    }

    const recommendMovieList = await res.json()

    return recommendMovieList
  } catch (error) {}
}

export async function getMovieData(pageId: string | number, mediaType: string) {
  try {
    const res = await fetch(
      `${movieDbURL}/3/${mediaType}/${pageId}?api_key=${process.env.MOVIE_DATABASE_ID}&append_to_response=credits,videos`,
      { cache: "no-store" }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
    }

    const movieList = await res.json()

    return movieList
  } catch (error) {
    // console.log(error)
  }
}
