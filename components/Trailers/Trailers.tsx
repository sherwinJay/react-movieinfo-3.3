'use client'

import { getTrending } from '@/services/queries'
import TrailerThumbnailWrapper from './TrailerThumbnailWrapper'
import SkeletonTrailers from '../Skeleton/SkeletonTrailers'

export interface TrailersProps {
  popularity: number
  name: string
  title: string
  backdrop_path: string
  media_type: 'movie' | 'tv'
  id: string
}

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