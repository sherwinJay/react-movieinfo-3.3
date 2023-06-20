import React from 'react'
import loadingImg from '@/public/images/loading2.svg'
import ImgComponent from '../ImgComponent'

const Loader = () => {
  return (
    <div className='h-[100%] grid place-content-center font-satoshi'>
      <div className='w-[200px] mt-[-50px]'>
        <ImgComponent
          src={loadingImg}
          alt="loading"
          width={200}
          height={259}
          placeholder='empty'
        />
        <div className='mt-5 flex justify-center items-center relative text-[#fff] border-[none] bg-[transparent] text-[1rem] leading-[1.5rem] px-[2rem] py-[1rem]'>
          <p className='text-center'>Loading...</p>
          <svg className='absolute w-full h-full'>
            <rect
              x="1" 
              y="1"
              className='fill-none stroke-white stroke-1 w-[calc(100%-2px) h-[calc(100%-2px)] animate-animationLoader1 loaderStyle1'
            >
            </rect>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Loader