import React from 'react'

const SkeletonBanner = () => {
  return (
    <div className='bg-slate-800'>
      <div role="status" className="w-[100%] m-auto px-[1em] py-[2em] md:p-[3em] md:grid md:grid-cols-bannerGrid_2Col md:gap-5 xl:w-[1200px] animate-pulse">
        <div className="hidden md:flex items-center justify-center w-full bg-gray-400 rounded sm:w-96 md:w-80 dark:bg-gray-600">
          <svg className="w-10 h-10 lg:w-[60px] lg:h-[350px] text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="w-full">
          <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-600 w-48 mb-3"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-600 max-w-[300px]"></div>
          <div className='my-4 flex gap-4 items-center'>
            <div className="bg-gray-400 rounded-full dark:bg-gray-600 w-12 h-12"></div>
            <div className="bg-gray-400 rounded-full dark:bg-gray-600 w-8 h-8"></div>
            <div className="bg-gray-400 rounded-full dark:bg-gray-600 w-8 h-8"></div>
          </div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-600 max-w-[550px] mb-2.5"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-600 max-w-[520px] mb-2.5"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-600 max-w-[530px] mb-2.5"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-600 max-w-[500px]"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-600 max-w-[300px] mt-4 mb-2.5"></div>
          <div className="h-2 bg-gray-400 rounded-full dark:bg-gray-600 max-w-[300px]"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default SkeletonBanner