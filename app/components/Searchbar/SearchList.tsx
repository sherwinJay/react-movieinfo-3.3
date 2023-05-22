'use client'

import { movieDbURL } from '@/app/constant';
import axios from 'axios';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react'
import useSWR from 'swr'

type ISearchVal = {
  searchVal: string
  setSearchVal: Dispatch<SetStateAction<string>>
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

type SearchData = {
  media_type: string
  title: string
  name: string
  id: string
}

type SWRData = {
  data: SearchData[]
  isLoading: boolean
  error: unknown
}

const SearchList = ({searchVal, setSearchVal, setIsOpen}: ISearchVal) => {

  const movieApi = `${movieDbURL}/3/search/multi?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&query=${searchVal}&page=1&include_adult=false`;
  
  const fetcher = async (url: string) => {
    try { 
      const response = await axios.get(url)
      const data = response.data.results
      return data
    } catch (error) {
      // return []
      console.log(error)
    }
  };

  // get data using swr
  const { 
    data,
    isLoading,
    error
  } : SWRData = useSWR(movieApi, fetcher)

  if(!data || searchVal.length < 3){
    return null
  }


  const filteredData = data?.filter((data) => data.media_type !== "person")
  const slicedData = filteredData.slice(0,9)

  const searchedList = slicedData.map((movie) => (
    <li key={movie.id} className="border-b border-solid last:border-0 border-[#eee] md:border-[#eee]">
      <Link 
        href={`/${movie.media_type === 'movie' ? 'movies' : 'tv'}/${movie.id}`}
        className="block px-[0.5em] py-[0.4em] hover:bg-[#424a85] hover:md:bg-[#dedede] md:px-[0.8em]"
        onClick={
          () => {
            setSearchVal('')
            setIsOpen(false)
          }
        }
      >
        <p className="leading-5">{movie.media_type === 'movie' ? movie.title : movie.name}</p>
        <p className="text-[0.7rem] text-[#d7677f] md:text-[#777] italic">
          {movie.media_type}
        </p>
      </Link>
    </li>
  ))

  const noMovie = () => {
    return (
      <li className="p-[0.8em] block">
        NO RESULT
      </li>
    )
  };

  const searchList = searchedList.length > 0 ? searchedList : noMovie();

  return (
    <ul className="absolute top-[38px] w-[100%] overflow-hidden z-50 bg-transparent text-[#fff] md:bg-[#fff] md:text-[#000] md:rounded-[1em]">
      {searchList}
    </ul>
  )
}

export default SearchList