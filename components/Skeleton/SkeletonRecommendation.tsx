import React from 'react'

const SkeletonRecommendation = () => {
  return (
    <div className='bg-slate-800'>
      <div role="status" className="w-[100%] m-auto pt-4 px-4 md:px-5 py-[1.7em] flex flex-col animate-pulse h-[180px] md:h-[230px] lg:h-[315px]">
        <div className="h-4 md:h-5 bg-gray-400 rounded-full dark:bg-gray-600 w-full max-w-[150px] md:max-w-[200px] mb-5 md:mb-7"></div>
        <div className='flex gap-[1em] items-center h-full'>
          <div className="h-full bg-gray-400 rounded-lg dark:bg-gray-600 w-full max-w-[550px] mb-2.5"></div>
          <div className="h-full bg-gray-400 rounded-lg dark:bg-gray-600 w-full max-w-[520px] mb-2.5"></div>
          <div className="hidden md:block h-full bg-gray-400 rounded-lg dark:bg-gray-600 w-full max-w-[520px] mb-2.5"></div>
        </div>
      </div>
    </div >
  )
}

export default SkeletonRecommendation