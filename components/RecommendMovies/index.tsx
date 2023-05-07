'use client'
import { movieDbImgURL } from '@/constant'
import { RecommendData } from '@/types'
import React, { useCallback, useEffect, useState } from 'react'
import useSWR from 'swr'
import RecommendCards from './RecommendCards'

export type Props = {
  contentData: {
    results: RecommendData
  }
  mediaType: string
}

const RecommendMovies = ({contentData, mediaType}: Props) => {

  const [background, setBackground] = useState<string>('')

  useEffect(() => {
    // set recommendation background to the first show data on the array
    // checks first if the data has obj property of 'results'
    contentData?.results && setBackground(`${movieDbImgURL}/t/p/original${contentData?.results[0]?.backdrop_path}`)
   
  }, [contentData])
  

  // change background when hovering to the recommendation thumbnails
  const pointerEvent = useCallback((imageId: string | null | undefined) => {
    // console.log('render')
    if(background){
      setBackground(`${movieDbImgURL}/t/p/original${imageId}`)
    }
    
  }, [background])

  const slicedRecommendData =  contentData.results?.slice(0,7);

  const recommendMovieLists = slicedRecommendData?.map((movie) => (
    <RecommendCards
      key={movie.id}
      bgImage={movie.backdrop_path}
      title={mediaType === "movie" ? movie.title : movie.name}
      id={movie.id}
      mediaType={mediaType}
      pointerEvent={pointerEvent}
    />
  )) 


  // inline style for the recommendation container
  const recommendationBg = {
    backgroundImage: `linear-gradient(rgba(11,11,11,0.6),rgba(11,11,11,0.2)), url(${background})`,
  }

  return (
    <div 
      className="bg-cover bg-center bg-no-repeat p-5 transition-all delay-500 ease-in-out overflow-x-auto scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-slate-900" 
      style={recommendationBg}
    >
      <h2 className="mb-[20px] text-2xl font-bold">
        Recommendations
      </h2>
      {
        contentData.hasOwnProperty("results") && contentData.results.length > 0 ? (
          <div className="grid grid-cols-07 gap-[1em] w-fit">
            <>
              {recommendMovieLists}
            </>
          </div>
        ) : (
          <p>No Recommendations</p>
        )
      }
    </div>
  )
}

export default RecommendMovies