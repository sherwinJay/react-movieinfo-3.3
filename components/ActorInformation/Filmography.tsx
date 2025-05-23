'use client'

import { cn } from '@/lib/utils'
import { ActorCombinedCreditsTypes } from '@/types'
import Link from 'next/link'
import { FC, useState } from 'react'

const Filmography: FC<{ actorCredits: ActorCombinedCreditsTypes }> = ({ actorCredits }) => {

  // TODO : if no movie/tv show create a content

  const [mediaType, setMediaType] = useState('movie')
  const dataSortedByYear = actorCredits.cast.filter((item: ActorCombinedCreditsTypes) => item.character.length > 0).filter((item: ActorCombinedCreditsTypes, index: number, self: ActorCombinedCreditsTypes[]) =>
    index === self.findIndex((other: ActorCombinedCreditsTypes) => {
      const otherName = other.name || other.title
      const itemName = item.name || item.title
      return otherName === itemName
    })).filter((item: ActorCombinedCreditsTypes) => item.media_type === mediaType) as ActorCombinedCreditsTypes[]

  const groupedDataByYear = dataSortedByYear.reduce((acc: any, data) => {
    const dateStr = data.release_date ?? data.first_air_date;
    if (!dateStr) return acc

    const year = new Date(dateStr).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(data);
    return acc;
  }, {});

  return (
    <>
      <div className='flex text-sm mt-5 mb-7 overflow-hidden rounded-full border-[1px] boder-white w-fit'>
        <button className={cn('py-1.5 px-4 rounded-full',
          mediaType === 'movie' && 'bg-flamingo-500'
        )} onClick={() => setMediaType('movie')}>Movies</button>
        <button className={cn('py-1.5 px-4 rounded-full',
          mediaType === 'tv' && 'bg-flamingo-500'
        )} onClick={() => setMediaType('tv')}>TV Shows</button>
      </div>
      <ul>
        {dataSortedByYear.length > 0 ? (
          Object.keys(groupedDataByYear || {}).sort((a, b) => Number(b) - Number(a)).map(year => (
            <li key={year} className="flex gap-5 border-slate-500 border-t-[1px] py-7 text-sm">
              <p className='text-flamingo-300'>{year}</p>
              <div className='flex flex-col gap-4'>
                {groupedDataByYear[year].sort((a: ActorCombinedCreditsTypes, b: ActorCombinedCreditsTypes) => {

                  const releaseDateA = mediaType === 'movie' ? new Date(a.release_date) : new Date(a.first_air_date)
                  const releaseDateB = mediaType === 'movie' ? new Date(b.release_date) : new Date(b.first_air_date)

                  return Number(releaseDateB) - Number(releaseDateA)
                }).map((data: ActorCombinedCreditsTypes) => (
                  <Link key={data.credit_id} href={data.media_type === "movie" ? `/movies/${data.id}` : `/${data.media_type}/${data.id}`}>
                    <div className='flex gap-2'>
                      <p className='font-semibold'>{data.name ?? data.title}</p>
                    </div>
                    <div className='flex gap-2'>
                      <p className='ml-3 mt-[2px] font-extralight'>
                        {`as ${data.character}`}
                        <span className='ml-2 text-gray-300 font-extralight'>
                          {data.media_type === 'tv' && (`(${data.episode_count} ${data.episode_count > 1 ? 'episodes' : 'episode'})`)}
                        </span>
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </li>
          ))
        ) : (
          <li className="flex gap-5 border-slate-500 border-t-[1px] text-white py-7 text-sm">
            {mediaType === 'movie' ? 'No Movies' : 'No TV Shows'}
          </li>
        )}
      </ul>
    </>
  )
}

export default Filmography