import { movieDbURL } from "@/constant"
import { HomeCardData } from "@/types"
import { useQuery } from "@tanstack/react-query"
import {
  fetchHomePageMovies,
  fetchRecommendMovies2,
  getSearchGames,
} from "./api"

export function fetchSearchGames(searchValue: string) {
  return useQuery({
    queryKey: ["shows", { searchValue }],
    queryFn: ({ signal }) => getSearchGames({ searchValue, signal }),
    staleTime: 10000,
  })
}

export function getRecommendations(pageId: string | number, mediaType: string) {
  // console.log("recommended query id: ", pageId)
  // console.log("mediaType: ", mediaType)

  return useQuery({
    queryKey: ["recommendations", { pageId, mediaType }],
    queryFn: async () => await fetchRecommendMovies2({ pageId, mediaType }),
    staleTime: 1000,
  })
}

export async function getMoviesData() {
  const [popularMovie, upcomingMovie, nowPlayingMovie, popularTV] =
    await Promise.all<HomeCardData[]>([
      fetchHomePageMovies(
        `${movieDbURL}/3/movie/popular?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`
      ),
      fetchHomePageMovies(
        `${movieDbURL}/3/movie/upcoming?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`
      ),
      fetchHomePageMovies(
        `${movieDbURL}/3/movie/now_playing?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`
      ),
      fetchHomePageMovies(
        `${movieDbURL}/3/tv/popular?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`
      ),
    ])

  return {
    popularMovie,
    upcomingMovie,
    nowPlayingMovie,
    popularTV,
  }
}
