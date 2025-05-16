'use client'

import { cn } from '@/lib/utils'
import { RecommendData } from '@/types'
import { normalizeImgixUrl } from '@/utils/imgixLoader'
import { useFetchBG } from '@/utils/useFetchBG'
import { FC } from 'react'
import RecommendCards from './RecommendCards'

interface RecommendWrapperProps {
  recommendationData: RecommendData[]
  mediaType: string
}

const RecommendWrapper: FC<RecommendWrapperProps> = ({ recommendationData, mediaType }) => {
  const { background, pointerEvent } = useFetchBG(`${normalizeImgixUrl(`/t/p/w1280${recommendationData[0]?.backdrop_path}`)}`)

  console.log('recommend bg: ', background)

  return (
    <div
      className={cn(
        `bg-cover bg-center bg-no-repeat !transition-all !duration-500`,
        recommendationData.length === 0 && '!bg-slate-900 !bg-none',
      )}
      style={{ backgroundImage: `linear-gradient(rgba(11,11,11,0.6),rgba(11,11,11,0.2)), url(${background})` }}
    >
      <h2 className="mb-[20px] text-[20px] md:text-2xl font-bold pt-4 px-4 md:px-5">
        Recommendations
      </h2>
      <div className='pb-5 px-4 md:px-5 transition-all delay-500 ease-in-out overflow-x-auto scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-slate-900'>
        {recommendationData.length > 0 ? (
          <div className="grid grid-cols-07 gap-[1em] w-fit">
            {recommendationData?.map((movie: RecommendData) => (
              <RecommendCards
                key={movie.id}
                bgImage={movie.backdrop_path}
                title={mediaType === "movie" ? movie.title : movie.name}
                id={movie.id}
                mediaType={mediaType}
                pointerEvent={pointerEvent}
              />
            ))}
          </div>
        ) : (
          <div className='h-fit grid place-content-center py-20'>
            <p>No Recommendations</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecommendWrapper