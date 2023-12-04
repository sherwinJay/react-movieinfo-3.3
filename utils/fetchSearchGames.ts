import { movieDbURL } from "@/constant";
import { SearchData } from "@/types";
import axios, { GenericAbortSignal } from "axios";

type FetchSearchType = {
  searchVal : string
  signal?: AbortSignal | undefined
}

export const fetchSearchGames = async ({searchVal, signal}: FetchSearchType) => {

  const movieApi = `${movieDbURL}/3/search/multi?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&query=${searchVal}&page=1&include_adult=false`;

  try { 
    const response = await axios.get(movieApi, {signal})

    const data = response.data.results
    return data as SearchData[]

  } catch (error) {
    // return []
    // console.log(error)
  }
};
