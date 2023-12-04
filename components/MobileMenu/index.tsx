'use client'

import React, { Dispatch, SetStateAction } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Searchbar from '@/components/Searchbar';
import clsx from 'clsx';

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

const MobileMenu = ({isOpen, setIsOpen}: Props) => {

  return (
    <div className={
      clsx(
        'bg-black/70 fixed w-full h-full top-0 transition-position ease-in-out duration-200 z-999 ',
        isOpen && 'left-0',
        !isOpen && 'left-[100%]'
      )}
    >
      <div className={
        clsx(
          'text-[12px] font-satoshi absolute w-[85%] h-full top-0 bg-[#1b1f3a] p-5',
          isOpen && 'left-[15%]',
          !isOpen && 'left-[100%]'
        )}
      >
        <div className='flex justify-end mb-[20px]'>
          <CloseIcon 
            className='cursor-pointer'
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