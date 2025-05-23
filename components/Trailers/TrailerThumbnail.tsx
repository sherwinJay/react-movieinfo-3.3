'use client'

import { getTrendingTrailers } from '@/services/queries'
import { FC, use, useRef } from 'react'
import ImgComponent from '../ImgComponent'
import { normalizeImgixUrl } from '@/utils/imgixLoader'
import { Play } from 'lucide-react'
import NoImage from '../NoImage/NoImage'
import { TrailerThumbnailProps, TrailerType } from '@/types'
import { SkeletonTrailer } from '../Skeleton/SkeletonTrailers'

const TrailerThumbnail: FC<TrailerThumbnailProps> = ({ name, title, backdrop_path, id, media_type, pointerEvent }) => {

  const trendingTrailerQuery = getTrendingTrailers(id, media_type)
  const imageRef = useRef<HTMLImageElement>(null)

  if (trendingTrailerQuery.isLoading) {
    return (
      <SkeletonTrailer />
    )
  }

  const trendingTrailer = trendingTrailerQuery?.data?.results.filter(((trailer: TrailerType) => trailer.type === "Trailer"))

  return (
    <div className="">
      <div className='relative w-fit group'>
        <a
          href={`https://www.youtube.com/watch?v=${trendingTrailer[0]?.key}`}
          target='_blank'
          className='pointer-cursor'
        >
          {backdrop_path === '' || backdrop_path === null ? (
            <NoImage
              className="h-[112px] md:h-[10.5em] grid place-content-center bg-gray-400"
              width={40}
              height={40}
            />
          ) : (
            <ImgComponent
              src={`${normalizeImgixUrl(`/t/p/w780/${backdrop_path}`)}`}
              alt={media_type === 'movie' ? 'title' : 'name'}
              width={380}
              height={169}
              id={backdrop_path}
              className='rounded-md shadow-lg shadow-black/20 scale-100 group-hover:scale-105 transition delay-50 duration-150 ease-in-out'
              placeholder='blur'
              blurDataURL={`${normalizeImgixUrl(`/t/p/w300/${backdrop_path}`)}`}
              onPointerEnter={() => pointerEvent(imageRef?.current?.id)}
              imageRef={imageRef}
            />
          )}

          <Play className='absolute top-[40%] left-[45%] w-8 h-8 lg:w-10 lg:h-10 border-[1px] border-white rounded-full p-1.5 scale-95 group-hover:scale-110 transition delay-50 duration-150 ease-in-out' />
        </a>

      </div>
      <p className='text-center mt-1 lg:mt-2 text-xs lg:text-sm font-normal'>{media_type === 'movie' ? title : name}</p>
    </div>
  )
}

export default TrailerThumbnail