import { movieDbImgURL } from '@/app/constant'
import { LeadCastData } from '@/types'
import React from 'react'
import ImgComponent from '../ImgComponent'
// import { castContainer, castImgContainer, castName, castNameContainer, contentContainer, noCast } from './styles'


interface CastData {
  castData: LeadCastData
}

const LeadCast = ({castData}: CastData) => {

  const castImage = (profilePath: string | null, name: string) => {
    if (profilePath === null){
      return (
          <div className="h-[14.45em] overflow-hidden grid place-content-center bg-[#f14066]">
            <p>No Image</p>
          </div>
        )
    }else{
      return (
        <div className="relative overflow-hidden">
          <ImgComponent
            className="" 
            src={`${movieDbImgURL}/t/p/w154/${profilePath}`} 
            alt={name}
            width={154}
            height={231}
            placeholder="blur"
          />
        </div>
      )
    }
  }

  const slicedCast = castData?.credits?.cast?.slice(0,7)

  const getCast = slicedCast?.map((cast) => (
    <li key={cast.credit_id} className="min-w-[9.6em] overflow-hidden bg-[#1c1a3e] rounded-md">
      <div className="relative overflow-hidden">
        { castImage(cast.profile_path, cast.name) }	
      </div>
      <div className="px-2 py-[7px]"> 
        <p className="font-bold text-sm">{cast.name}</p>
        <p className="text-[13px] mt-[2px] leading-[18px]">{cast.character}</p>
      </div>
    </li> 
  ))

  return (
    <div className="border-b-2 border-[#121c31]">
      <h2 className="mb-[20px] text-2xl font-bold">Lead Casts</h2>
      {
        castData.credits.cast.length > 0 ? (
          <ul className={`grid grid-cols-07 gap-[1em] overflow-x-auto pb-[1.5em] scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-slate-900`}>
            <>
              { getCast }
            </>
          </ul>
        ) : (
          <div className="min-h-[338px] grid place-content-center">
            <p>No Casts</p>
          </div>
        )
      }
    </div>
  )
}

export default LeadCast