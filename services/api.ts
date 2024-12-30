import { movieDbURL } from "@/constant"
import { SearchData } from "@/types"
import axios, { GenericAbortSignal } from "axios"
import { HomeCardData } from "@/types"

type FetchSearchType = {
  searchValue: string
  signal?: AbortSignal | undefined
}

type RecommendedType = {
  pageId: string | number
  mediaType: string
  signal?: AbortSignal | undefined
}

export const fetchSearchMovies = async ({
  searchValue,
  signal,
}: FetchSearchType) => {
  const movieApi = `${movieDbURL}/3/search/multi?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&query=${searchValue}&page=1&include_adult=false`

  try {
    const response = await axios.get(movieApi, { signal })

    const data = response.data.results
    return data as SearchData[]
  } catch (error) {
    // return []
    console.log(error)
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

export const fetchRecommendMovies2 = async ({
  pageId,
  mediaType,
  signal,
}: RecommendedType) => {
  const movieApi = `${movieDbURL}/3/${mediaType}/${pageId}/recommendations?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`

  try {
    const res = await axios.get(movieApi, { signal })
    const recommendMovieList = await res.data!

    return recommendMovieList
  } catch (error) {
    console.log("recommended error", error)
  }
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
    console.log(error)
  }
}

export async function getAllMoviesData() {
  const [popularMovie, upcomingMovie, nowPlayingMovie, popularTV] =
    await Promise.all<HomeCardData[]>([
      fetchHomePageMovies(
        `${movieDbURL}/3/movie/popular?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`
      ),
      fetchHomePageMovies(
        `${movieDbURL}/3/trending/movie/week?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`
      ),
      fetchHomePageMovies(
        `${movieDbURL}/3/movie/now_playing?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`
      ),
      fetchHomePageMovies(
        `${movieDbURL}/3/trending/tv/week?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`
      ),
    ])

  return {
    popularMovie,
    upcomingMovie,
    nowPlayingMovie,
    popularTV,
  }
}
