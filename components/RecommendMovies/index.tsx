'use client'

import { RecommendData } from '@/types'
import React from 'react'
import { getRecommendations } from '@/services/queries'
import RecommendWrapper from './RecommendWrapper'
import SkeletonRecommendation from '../Skeleton/SkeletonRecommendation'

export type Props = {
  mediaType: string
  pageId: string | number
}

const RecommendMovies = ({ mediaType, pageId }: Props) => {

  const recommendationQueries = getRecommendations(pageId, mediaType) //! check later
  // const isLoading = true

  if (recommendationQueries.isLoading) {
    return (
      <SkeletonRecommendation />
    )
  }


  if (!recommendationQueries.data.hasOwnProperty("results")) {
    return (
      <div className='h-fit grid place-content-center py-20'>
        <p>No Recommendations</p>
      </div>
    )
  }

  const slicedRecommendData = recommendationQueries?.data?.results?.slice(0, 7) as RecommendData[]


  return (
    <RecommendWrapper recommendationData={slicedRecommendData} mediaType={mediaType} />
  )
}

export default RecommendMovies