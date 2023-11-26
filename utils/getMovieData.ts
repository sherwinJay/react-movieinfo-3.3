import { movieDbURL } from "@/constant";

export async function getMovieData(pageId: string | number, mediaType: string){
  try {
    const res = await fetch(
      `${movieDbURL}/3/${mediaType}/${pageId}?api_key=${process.env.MOVIE_DATABASE_ID}&append_to_response=credits,videos`,
        {cache: "no-store"}
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    
    const movieList = await res.json()
  
    return movieList
  } catch (error) {
    // console.log(error)
  }
}