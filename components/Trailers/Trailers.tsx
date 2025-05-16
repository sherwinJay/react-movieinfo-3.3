'use client'

import { getTrending } from '@/services/queries'
import TrailerThumbnailWrapper from './TrailerThumbnailWrapper'
import SkeletonTrailers from '../Skeleton/SkeletonTrailers'
import { TrailersProps } from '@/types'

const Trailers = ({ }) => {

  const trendingQuery = getTrending()

  if (trendingQuery.isLoading) {
    return (
      <SkeletonTrailers />
    )
  }

  const sortedTrendingTrailer = trendingQuery?.data?.results?.sort((a: TrailersProps, b: TrailersProps) => b.popularity - a.popularity)
  const slicedTrendingTrailer = sortedTrendingTrailer?.slice(0, 10) as TrailersProps[]

  return (
    <TrailerThumbnailWrapper trendingTrailerData={slicedTrendingTrailer} />
  )
}

export default Trailers