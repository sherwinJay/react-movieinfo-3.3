'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Searchbar from '../Searchbar'
import MobileMenu from '../MobileMenu'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen);

  // Mobile Menu will show after clicking the menu icon
  // use css to mobile menu to show or hide

  return (
    <header className="bg-[#1b1f3a] relative">
      <div className="w-[100%] m-auto px-4 py-4 flex justify-between xl:w-[1200px]">
        <h1>
          <Link 
            href="/" 
            className="text-[1.4rem] text-[#c9173d] font-bold md:text-[1.8rem]"
          >
            Movies Info
          </Link>
        </h1>
        <div className="relative hidden md:block">
          <Searchbar setIsOpen={setIsOpen} />
        </div>
        <div className="block md:hidden">
          <SearchIcon 
            className="cursor-pointer" 
            onClick={() => toggle()}
          />
          <MobileMenu 
            isOpen={isOpen} 
            setIsOpen={setIsOpen} 
          />
        </div>
      </div>
    </header>
  )
}

export default MainHeader