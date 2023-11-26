import { movieDbURL } from "@/constant";

export async function fetchRecommendMovies(pageId: string | number, mediaType: string){

  try {
    const res = await fetch(
      `${movieDbURL}/3/${mediaType}/${pageId}/recommendations?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`,
      {cache: "no-store"}
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch recommend data')
    }

    const recommendMovieList = await res.json()
  
    return recommendMovieList
  
  } catch (error) {
    
  }
}

export default fetchRecommendMovies