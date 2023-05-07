import { movieDbURL } from "@/constant";

export async function fetchRecommendMovies(pageId: string | number, mediaType: string){
  const res = await fetch(
    `${movieDbURL}/3/${mediaType}/${pageId}/recommendations?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`,
    {cache: "no-store"}
  );
  const recommendMovieList = await res.json()

  return recommendMovieList
}

// const useFetch = function<T>(url: string) {
//   return fetch(url).then(res => res.json)
// }

export default fetchRecommendMovies