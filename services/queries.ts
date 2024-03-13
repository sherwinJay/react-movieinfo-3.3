import { movieDbURL } from "@/constant"
import { HomeCardData } from "@/types"
import { useQuery } from "@tanstack/react-query"
import { fetchHomePageMovies, getSearchGames } from "./api"

export function fetchSearchGames(searchVal: string) {
  return useQuery({
    queryKey: ["shows", { searchVal }],
    queryFn: ({ signal }) => getSearchGames({ searchVal, signal }),
    staleTime: 10000,
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
