export async function fetchHomePageMovies(url: string){
  try {
    
    const res = await fetch(url, {cache: "no-store"});

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    const homePageMovieData = await res.json()

    const homePageMovieList = homePageMovieData?.results
  
    return homePageMovieList
  
  } catch (error) {
    console.log(error)
  }
}
