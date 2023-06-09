import { movieDbURL } from "@/constant";

export async function getMovieData(pageId: string | number, mediaType: string){
  try {
    const res = await fetch(
      `${movieDbURL}/3/${mediaType}/${pageId}?api_key=${process.env.MOVIE_DATABASE_ID}&append_to_response=credits,videos`,
        {cache: "no-store"}
    );
    
    const movieList = await res.json()

    // console.log('response status', res.status)
  
    return movieList
  } catch (error) {
    // console.log(error)
  }
}