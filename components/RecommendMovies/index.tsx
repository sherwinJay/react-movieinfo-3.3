'use client'

import { RecommendData } from '@/types'
import React, { ReactNode, useEffect } from 'react'
import RecommendCards from './RecommendCards'
import clsx from 'clsx'
import { normalizeImgixUrl } from '@/utils/imgixLoader'
import { useFetchBG } from '@/utils/useFetchBG'
import { getRecommendations } from '@/services/queries'

export type Props = {
  contentData: {
    results: RecommendData[]
  }
  mediaType: string
  pageId: string | number
}

const RecommendMovies = ({ contentData, mediaType, pageId }: Props) => {

  // const recommendationQueries = getRecommendations(pageId, mediaType) //! check later

  const { background, pointerEvent } = useFetchBG(`${normalizeImgixUrl(`/t/p/w1280${contentData?.results[0]?.backdrop_path}`)}`)

  const slicedRecommendData = contentData?.results?.slice(0, 7);
  const recommendMovieLists = slicedRecommendData?.map((movie) => (
    <RecommendCards
      key={movie.id}
      bgImage={movie.backdrop_path}
      title={mediaType === "movie" ? movie.title : movie.name}
      id={movie.id}
      mediaType={mediaType}
      pointerEvent={pointerEvent}
    />
  )) as ReactNode

  // inline style for the recommendation container
  const recommendationBg = {
    backgroundImage: `linear-gradient(rgba(11,11,11,0.6),rgba(11,11,11,0.2)), url(${background})`,
  }

  // if (recommendationQueries.isLoading) {
  //   return <p>loading...</p>
  // }

  return (
    <div
      className={clsx(
        `bg-cover bg-center bg-no-repeat !transition-all !duration-500`,
        contentData.results.length === 0 && '!bg-slate-900 !bg-none',
      )}
      style={recommendationBg}
    >
      <h2 className="mb-[20px] text-[20px] md:text-2xl font-bold pt-4 px-4 md:px-5">
        Recommendations
      </h2>
      <div className='pb-5 px-4 md:px-5 transition-all delay-500 ease-in-out overflow-x-auto scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-slate-900'>
        {
          contentData.hasOwnProperty("results") && contentData.results.length > 0 ? (
            <div className="grid grid-cols-07 gap-[1em] w-fit">
              {recommendMovieLists}
            </div>
          ) : (
            <div className='h-fit grid place-content-center py-20'>
              <p>No Recommendations</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default RecommendMovies