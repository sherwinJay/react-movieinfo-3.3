'use client'

import { FC } from 'react'
import { useFetchBG } from '@/utils/useFetchBG'
import { normalizeImgixUrl } from '@/utils/imgixLoader'
import TrailerThumbnail from './TrailerThumbnail'
import { TrailersProps } from '@/types'

const TrailerThumbnailWrapper: FC<{ trendingTrailerData: TrailersProps[] }> = ({ trendingTrailerData }) => {

  const { background, pointerEvent } = useFetchBG(`${normalizeImgixUrl(`/t/p/w1280${trendingTrailerData[0]?.backdrop_path}`)}`)

  return (
    <section className='bg-cover bg-center bg-no-repeat !transition-all !duration-500 delay-50 ease-in-out' style={{ backgroundImage: `url(${background}` }}>
      <div className='pt-8 lg:pt-12 bg-[linear-gradient(rgba(11,11,11,0.6),rgba(11,11,11,0.2))]'>
        <div className='w-[100vw] lg:w-[1200px] mx-auto px-[1em] lg:px-2'>
          <h2 className="px-[10px] font-bold text-[1rem] text-[#e11d48] md:text-[1.25rem] inline-block mb-2">Popular Trailers</h2>
          <div className='overflow-x-auto pb-5 lg:pb-12 scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-transparent'>
            <div className='grid grid-cols-10 p-[10px] gap-6 w-[2100px] lg:w-[3400px]'>
              {trendingTrailerData.map((data: TrailersProps) => (
                <TrailerThumbnail
                  key={data.id}
                  title={data.title}
                  name={data.name}
                  id={data.id}
                  media_type={data.media_type}
                  backdrop_path={data.backdrop_path}
                  pointerEvent={pointerEvent}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default TrailerThumbnailWrapper