'use client'

import { fetchSearchGames } from '@/utils/fetchSearchGames';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react'
import ErrorMessage from '../ErrorMessage/ErrorMessage';

type ISearchVal = {
  searchVal: string
  setSearchVal: Dispatch<SetStateAction<string>>
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SearchList = ({searchVal, setSearchVal, setIsOpen}: ISearchVal) => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['shows', { searchVal }],
    queryFn: ({signal}) => fetchSearchGames({searchVal, signal}),
    staleTime: 10000,
  })

  const filteredData = data?.filter((data) => data.media_type !== "person")
  const slicedData = filteredData?.slice(0,9)

  if(searchVal.length < 3){
    return null
  }

  if(isLoading){
    return (
      <div
        className="absolute right-[10px] top-[6px] fill-[#e11d48] z-20 text-[#e11d48] inline-block h-[1.35rem] w-[1.35rem] animate-spin rounded-full border-4 border-solid border-current border-r-[#f0aebd] align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
      </div>
    )
  }

  // template for search movies
  const searchedList = slicedData?.map((movie) => (
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
        <p className="leading-[17px]">{movie.media_type === 'movie' ? movie.title : movie.name}</p>
        <p className="text-[0.7rem] text-[#d68899] md:text-[#d68899] italic">
          {movie.media_type}
        </p>
      </Link>
    </li>
  ))

  // template for no movies
  const noMovie = () => {
    return (
      <li className="p-[0.8em] block">
        NO RESULT
      </li>
    )
  };

  return (
    <>
      <ul className="absolute top-[38px] w-[100%] overflow-hidden z-50 bg-transparent text-[#fff] md:bg-[#fff] md:text-[#000] md:rounded-[1em]">
        { searchedList?.length ? searchedList : noMovie() }
      </ul>  
    </>
  )
}

export default SearchList