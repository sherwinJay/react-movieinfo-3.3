import { ActorCombinedCreditsTypes } from '@/types'
import Link from 'next/link'
import { FC } from 'react'
import Poster from '../Poster'


const ActorFilmThumbnails: FC<{ actorCredits: ActorCombinedCreditsTypes }> = ({ actorCredits }) => {

  const slicedData = actorCredits.cast.sort((b: ActorCombinedCreditsTypes, a: ActorCombinedCreditsTypes) => a.popularity - b.popularity).filter((item: ActorCombinedCreditsTypes) => !item.character.toLowerCase().includes('self') && item.character.length > 0).filter((item: ActorCombinedCreditsTypes, index: number, self: ActorCombinedCreditsTypes[]) =>
    index === self.findIndex((other: ActorCombinedCreditsTypes) => {
      const otherName = other.name || other.title
      const itemName = item.name || item.title
      return otherName === itemName
    })).slice(0, 8)

  console.log(slicedData)

  return (
    <div className='grid grid-cols-08 gap-[1em] overflow-x-auto pb-5 scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-slate-900 w-full'>
      {slicedData.map((item: ActorCombinedCreditsTypes) => (
        <Link key={item.credit_id} href={item.media_type === "movie" ? `/movies/${item.id}` : `/${item.media_type}/${item.id}`} className="w-[130px]">
          <div className='flex flex-col items-center gap-2 rounded-xl overflow-hidden w-full h-[190px]'>
            <Poster key={item.id} poster={item.poster_path} title={item.title!} name={item.name} mediaType={item.media_type} imageSize="w154" />
          </div>
          <p className='text-xs text-center mt-3'>{item.media_type === 'movie' ? item.title : item.name}</p>
        </Link>

      ))}
    </div>
  )
}

export default ActorFilmThumbnails