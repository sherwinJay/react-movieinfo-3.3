'use client'

import React, { SetStateAction, useCallback, useState } from 'react'
import SearchList from './SearchList';

type Props = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const Searchbar = ({setIsOpen}: Props) => {

  const [searchVal, setSearchVal] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const _onBlur = () => {
    setTimeout(() => {
      if (isFocus) {
        setIsFocus(false);
        setSearchVal("");
      }
    }, 500);
  };

  const _onFocus = () => {
    if (!isFocus) {
      setIsFocus(true);
    }
  };

  const _onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault()
    }
  }

  const getSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  }

  return (
    <form className='w-full  md:w-[350px]'>
      <div className='flex w-full px-[1em] py-[0.4em] bg-[#fff] rounded-[1.2em] gap-2 items-center'>
        <svg fill="#888" height="17px" width="17px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="-36.08 -36.08 523.16 523.16" stroke="#888" strokeWidth="45.1"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M447.05,428l-109.6-109.6c29.4-33.8,47.2-77.9,47.2-126.1C384.65,86.2,298.35,0,192.35,0C86.25,0,0.05,86.3,0.05,192.3 s86.3,192.3,192.3,192.3c48.2,0,92.3-17.8,126.1-47.2L428.05,447c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4 C452.25,441.8,452.25,433.2,447.05,428z M26.95,192.3c0-91.2,74.2-165.3,165.3-165.3c91.2,0,165.3,74.2,165.3,165.3 s-74.1,165.4-165.3,165.4C101.15,357.7,26.95,283.5,26.95,192.3z"></path> </g> </g></svg>
      <input
        type="text" 
        placeholder="search movie" 
        value={searchVal} 
        onChange={getSearch}
        onBlur={_onBlur}
        onFocus={_onFocus}
        onKeyDown={_onKeyDown}
        className="text-[#000] text-[13px] border-none outline-none focus:outline-none bg-[#fff] w-full"
      />
      </div>
     
      <SearchList 
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        setIsOpen={setIsOpen}
      />
    </form>
  )
}

export default Searchbar