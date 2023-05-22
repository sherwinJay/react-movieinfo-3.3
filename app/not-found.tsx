'use client'

import Link from 'next/link'
import notFoundImg from '@/public/images/not-found.svg'
import Image from 'next/image'


export default function NotFound() {
  return (
    <div className='w-full h-full grid gap-2 place-content-center'>
      <Image
        src={notFoundImg}
        alt="not found"
        width={280}
        height={130}
        unoptimized={true}
      />
      <h1 className='text-center text-2xl'>
        Not found – 404!
      </h1>
      <a href="/" className='text-center mt-4 bg-[#c9173d] w-[160px] mx-auto rounded-full py-2'>
        Go back to Home
      </a>
    </div>
  )
}