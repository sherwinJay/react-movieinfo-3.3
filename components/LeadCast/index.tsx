import { CastData, LeadCastData } from '@/types'
import CastImage from './CastImage'
import { ReactNode } from 'react'
import { peopleIcon } from '@/utils/svgIcons'

const LeadCast = ({ castData }: CastData) => {

  const slicedCast = castData?.credits?.cast?.slice(0, 7)

  // template for cast container
  const getCast = slicedCast?.map((cast) => (
    <li key={cast.credit_id} className="min-w-[8em] md:min-w-[9.6em] overflow-hidden bg-[#1c1a3e] rounded-md">
      <div className="relative overflow-hidden">
        <CastImage
          profilePath={cast.profile_path}
          name={cast.name}
        />
      </div>
      <div className="px-2 md:px-3 py-2">
        <p className="font-bold text-[12px] md:text-[0.875rem] leading-4">
          {cast.name}
        </p>
        <p className="text-[10px] md:text-[13px] mt-0 md:mt-[2px] md:leading-[18px]">
          {cast.character}
        </p>
      </div>
    </li>
  )) as ReactNode

  return (
    <div className="border-b-2 border-[#121c31]">
      <div className='flex gap-2 items-center mb-[20px]'>
        {/* {peopleIcon()} */}
        <h2 className="text-[20px] md:text-2xl font-bold">
          Lead Casts
        </h2>
      </div>

      {
        castData.credits.cast.length ? (
          <ul className='grid grid-cols-07 gap-[1em] overflow-x-auto pb-[1.5em] scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-slate-900'>
            {getCast}
          </ul>
        ) : (
          <div className="min-h-[338px] grid place-content-center bg-slate-900">
            <p>No Casts</p>
          </div>
        )
      }
    </div>
  )
}

export default LeadCast