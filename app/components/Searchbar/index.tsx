'use client'

import React, { useCallback, useState } from 'react'
import SearchList from './SearchList';

type SearchEvent = {
  target: {
    value: string
  }
}

type Props = {
  setIsOpen: any
}

type KeyDownEvent = {
  preventDefault(): unknown; 
  key: string, 
  shiftKey: boolean
}

const Searchbar = ({setIsOpen}: Props) => {

  const [searchVal, setSearchVal] = useState<string>("");
  // const [movieList, setMovielist] = useState([]);
  const [focus, setFocus] = useState<boolean>(false);

  const _onBlur = () => {
    setTimeout(() => {
      if (focus) {
        setFocus(false);
        setSearchVal("");
      }
    }, 500);
  };

  const _onFocus = () => {
    if (!focus) {
      setFocus(true);
    }
  };

  const _onKeyDown = (e: KeyDownEvent) => {
    if(e.key === 'Enter' && !e.shiftKey){
      e.preventDefault()
    }
  }


  const getSearch = (e: SearchEvent) => {
    setSearchVal(e.target.value);
  }

  return (
    <form className='w-[100%]  md:w-[350px]'>
      <input
        type="text" 
        placeholder="search" 
        value={searchVal} 
        onChange={getSearch}
        onBlur={_onBlur}
        onFocus={_onFocus}
        onKeyDown={_onKeyDown}
        className="w-[100%] px-[1em] py-[0.5em] bg-[#fff] text-[#000] text-[13px] rounded-[1.2em] border-none outline-none focus:outline-none"
      />
      <SearchList 
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        setIsOpen={setIsOpen}
      />
    </form>
  )
}

export default Searchbar