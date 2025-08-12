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

export type ServerActionResult<T> =
  | { success: true; value: T }
  | { success: false; value: T }

export class ServerActionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ServerActionError"
  }
}

export const fetchSearchMovies = async ({
  searchValue,
  signal,
}: FetchSearchType) => {
  const movieApi = `${movieDbURL}/3/search/multi?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US&query=${searchValue}&page=1&include_adult=false`

  try {
    const response = await axios.get(movieApi, { signal })

    const data = response.data.results
    return data as SearchData[]
  } catch (error) {
    // return []
    console.log(error)
    return null
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
    if (error instanceof ServerActionError)
      return { success: false, error: error.message }
    throw error
  }
}

export async function fetchRecommendMovies(
  pageId: string | number,
  mediaType: string
) {
  try {
    const res = await fetch(
      `${movieDbURL}/3/${mediaType}/${pageId}/recommendations?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US&page=1`,
      { cache: "no-store" }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch recommend data")
    }

    const recommendMovieList = await res.json()

    return recommendMovieList
  } catch (error) {
    // console.log("error occured on fetching recommended movies", error)
    // return null
    if (error instanceof ServerActionError)
      return { success: false, error: error.message }
    throw error
  }
}

export const fetchRecommendMovies2 = async ({
  pageId,
  mediaType,
  signal,
}: RecommendedType) => {
  const movieApi = `${movieDbURL}/3/${mediaType}/${pageId}/recommendations?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US&page=1`

  try {
    // const res = await axios.get(movieApi, { signal })
    // const recommendMovieList = await res.data!

    const response = await fetch(movieApi, { cache: "no-store" })

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch recommend data")
    }

    const recommendMovieList2 = await response.json()

    return recommendMovieList2
  } catch (error) {
    // console.log("recommended error", error)
    // return null
    if (error instanceof ServerActionError)
      return { success: false, error: error.message }
    throw error
  }
}

export const fetchTrending = async () => {
  const movieApi = `${movieDbURL}/3/trending/all/day?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US`

  try {
    // const res = await axios.get(movieApi)
    // const trendingLists = await res.data!

    const response = await fetch(movieApi, { cache: "no-store" })

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch recommend data")
    }

    const trendingList2 = await response.json()

    // console.log(trendingList2)

    return trendingList2
  } catch (error) {
    console.log("trendings error", error)
    return null
  }
}

export const fetchTrendingTrailers = async ({
  pageId,
  mediaType,
  signal,
}: RecommendedType) => {
  const movieApi = `${movieDbURL}/3/${mediaType}/${pageId}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}`

  try {
    // const res = await axios.get(movieApi)
    // const trendingLists = await res.data!

    const response = await fetch(movieApi, { cache: "no-store" })

    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch recommend data")
    }

    const trendingTrailers = await response.json()

    return trendingTrailers
  } catch (error) {
    console.log("trending trailers error", error)
    return null
  }
}

export async function getMovieData(pageId: string | number, mediaType: string) {
  try {
    const res = await fetch(
      `${movieDbURL}/3/${mediaType}/${pageId}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&append_to_response=credits,videos`
      // { cache: "no-store" }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
    }

    const movieList = await res.json()

    return movieList
  } catch (error) {
    console.log(error)
    throw new Error("Fetch Home Movie Error")
  }
}

export async function getActorData(pageId: string | number) {
  try {
    const res = await fetch(
      `${movieDbURL}/3/person/${pageId}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}`
      // { cache: "no-store" }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
    }

    const personData = await res.json()

    return personData
  } catch (error) {
    // console.log(error)
    // throw new Error("Fetch Actor Data Error")
    if (error instanceof ServerActionError)
      return { success: false, error: error.message }
    throw error
  }
}

export async function getActorMovieData(pageId: string | number) {
  try {
    const res = await fetch(
      `${movieDbURL}/3/person/${pageId}/movie_credits?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}`
      // { cache: "no-store" }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
    }

    const personData = await res.json()

    return personData
  } catch (error) {
    // console.log(error)
    // throw new Error("Fetch Actor Movies Error")
    if (error instanceof ServerActionError)
      return { success: false, error: error.message }
    throw error
  }
}

export async function getActorTVData(pageId: string | number) {
  try {
    const res = await fetch(
      `${movieDbURL}/3/person/${pageId}/tv_credits?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}`
      // { cache: "no-store" }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
    }

    const personData = await res.json()

    return personData
  } catch (error) {
    // console.log(error)
    // throw new Error("Fetch Actor Data Error")
    if (error instanceof ServerActionError)
      return { success: false, error: error.message }
    throw error
  }
}

export async function getActorCombinedCreditsData(pageId: string | number) {
  try {
    const res = await fetch(
      `${movieDbURL}/3/person/${pageId}/combined_credits?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}`
      // { cache: "no-store" }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
    }

    const personData = await res.json()

    return personData
  } catch (error) {
    // console.log(error)
    // throw new Error("Fetch Actor Credits Error")
    if (error instanceof ServerActionError)
      return { success: false, error: error.message }
    throw error
  }
}

export async function getActorSocialMediaData(pageId: string | number) {
  try {
    const res = await fetch(
      `${movieDbURL}/3/person/${pageId}/external_ids?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}`
      // { cache: "no-store" }
    )

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data")
    }

    const personData = await res.json()

    return personData
  } catch (error) {
    // console.log(error)
    // throw new Error("Fetch Actor Social media Error")
    if (error instanceof ServerActionError)
      return { success: false, error: error.message }
    throw error
  }
}

export async function getAllMoviesData() {
  const [
    // popularMovie,
    upcomingMovie,
    nowPlayingMovie,
    popularTV,
    // trending,
  ] = await Promise.all<HomeCardData[]>([
    // fetchHomePageMovies(
    //   `${movieDbURL}/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US&page=1`
    // ),
    fetchHomePageMovies(
      `${movieDbURL}/3/trending/movie/day?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US&page=1`
    ),
    fetchHomePageMovies(
      `${movieDbURL}/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US&page=1`
    ),
    fetchHomePageMovies(
      `${movieDbURL}/3/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US&page=1`
    ),
    // fetchHomePageMovies(
    //   `${movieDbURL}/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US&page=1`
    // ),
  ])

  return {
    // popularMovie,
    upcomingMovie,
    nowPlayingMovie,
    popularTV,
    // trending,
  }
}
