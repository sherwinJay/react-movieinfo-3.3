'use client'

import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Searchbar from '../Searchbar';
import clsx from 'clsx';

type Props = {
  isOpen: boolean
  setIsOpen?: any
}

const MobileMenu = ({isOpen, setIsOpen}: Props) => {

  // const menuStyles = isOpen ? "fixed top-0 left-0 w-[100%] h-[100%] bg-[#1b1f3a] z-999 p-5" : "left-100"

  return (
    <div className=''>
      <div 
        className={
          clsx(
            'transition-position ease-in-out duration-200 font-satoshi fixed w-[100%] h-[100%] top-0  bg-[#1b1f3a] z-999 p-5',
            isOpen && 'left-0',
            !isOpen && 'left-[100%]'
          )
        }
      >
        <div className='flex justify-end mb-[20px] cursor-pointer'>
          <CloseIcon 
            onClick={ () => setIsOpen(false) }
          />
        </div>
        <div className='relative'>
          <Searchbar setIsOpen={setIsOpen} />
        </div>
        
      </div>
    </div>

  )
}

export default MobileMenu