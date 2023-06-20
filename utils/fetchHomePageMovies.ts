export async function fetchHomePageMovies(url: string){
  try {
    const res = await fetch(
      url,
      {cache: "no-store"}
    );

    const homePageMovieData = await res.json()

    const homePageMovieList = homePageMovieData?.results
  
    return homePageMovieList
  
  } catch (error) {
    console.log(error)
  }
}

// const useFetch = function<T>(url: string) {
//   return fetch(url).then(res => res.json)
// }

// export default fetchHomePageMovies