import { useQuery } from "@tanstack/react-query"
import {
  fetchHomePageMovies,
  fetchRecommendMovies2,
  fetchSearchMovies,
  fetchTrending,
  fetchTrendingTrailers,
} from "./api"

export function getSearchMovies(searchValue: string) {
  return useQuery({
    queryKey: ["shows", { searchValue }],
    queryFn: ({ signal }) => fetchSearchMovies({ searchValue, signal }),
    staleTime: 10000,
  })
}

export function getRecommendations(pageId: string | number, mediaType: string) {
  return useQuery({
    queryKey: ["recommendations", { pageId, mediaType }],
    queryFn: async () => await fetchRecommendMovies2({ pageId, mediaType }),
    staleTime: 1000,
  })
}

export function getPopularMovies(url: string) {
  return useQuery({
    queryKey: ["popularMovies", { url }],
    queryFn: async () => await fetchHomePageMovies(url),
    staleTime: 1000,
  })
}

export function getActorMovies(url: string) {
  return useQuery({
    queryKey: ["movie", { url }],
    queryFn: ({ signal }) => ({ url }),
    staleTime: 10000,
  })
}

export function getTrending() {
  return useQuery({
    queryKey: ["trendings"],
    queryFn: async () => await fetchTrending(),
    staleTime: 1000,
  })
}

export function getTrendingTrailers(
  pageId: string | number,
  mediaType: string
) {
  return useQuery({
    queryKey: ["trendings", { pageId, mediaType }],
    queryFn: async () => await fetchTrendingTrailers({ pageId, mediaType }),
    staleTime: 1000,
  })
}
