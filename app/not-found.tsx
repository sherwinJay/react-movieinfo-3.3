import notFoundImg from '@/public/images/not-found.svg'
import Image from 'next/image'
import { Metadata } from 'next'

export default function NotFound(){
  
  return (
    <div className='w-[100%] h-full grid gap-2 place-content-center fixed top-0 left-0 bg-black'>
      <Image
        src={notFoundImg}
        alt="not found"
        width={280}
        height={130}
        unoptimized={true}
        className='justify-self-center flex'
      />
      <h1 className='text-center text-2xl'>
        Oops! This page does not exist.
      </h1>
      <a href="/" className='text-center mt-4 bg-[#c9173d] w-[160px] mx-auto rounded-full py-2'>
        Go back to Home
      </a>
    </div>
  )
}

