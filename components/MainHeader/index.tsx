'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Searchbar from '../Searchbar'
import MobileMenu from '../MobileMenu'
import SearchIcon from '@mui/icons-material/Search';
import { usePathname } from 'next/navigation'

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname()

  // if website is on mobile, when user use back button turn setIsOpen to false 
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="bg-[#1b1f3a] relative font-satoshi">
      <div className="w-[100%] m-auto px-4 py-3 md:py-4 flex justify-between items-center xl:w-[1200px]">
        <h1>
          <Link
            href="/"
            className="text-[1.5rem] pink_gradient font-bold md:text-[2rem] tracking-wider"
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
            onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
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