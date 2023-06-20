'use client'

import React, { SetStateAction, useCallback, useState } from 'react'
import SearchList from './SearchList';

// type SearchEvent = {
//   target: {
//     value: string
//   }
// }

type Props = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

// type KeyDownEvent = {
//   preventDefault(): unknown; 
//   key: string, 
//   shiftKey: boolean
// }

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
    <form className='w-[100%]  md:w-[350px]'>
      <input
        type="text" 
        placeholder="search movie" 
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