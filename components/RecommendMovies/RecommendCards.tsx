import { movieDbImgURL } from '@/constant'
import Link from 'next/link'
import React, { use, useRef } from 'react'
import Image from 'next/image'
import { normalizeUnsplashUrl, unsplashLoader } from '@/utils'
import { imgixLoader, normalizeImgixUrl } from '@/utils/imgixLoader'
import NoImage from '../NoImage/NoImage'
import ImgComponent from '../ImgComponent'

type Props = {
  bgImage: string
  pointerEvent(imageId: string | null | undefined): void
  title: string
  id: string
  mediaType: string
}


const RecommendCards = ({id, bgImage, mediaType, title, pointerEvent}: Props) => {

  const imageRef = useRef<HTMLImageElement>(null)

  const getThumbnailImg = () => { 
    if(bgImage === '' || bgImage === null){
      return (
        <NoImage 
          className="h-[112px] md:h-[10.5em] grid place-content-center bg-gray-400"
          width={40}
          height={40}
        />
      )
    }else{
      return (
        <ImgComponent
          // loader={imgixLoader}
          src={`${normalizeImgixUrl(`/t/p/w300/${bgImage}`)}`}
          alt={title} 
          onPointerEnter={() => pointerEvent(imageRef?.current?.id)}
          id={bgImage}
          width={300}
          height={169}
          className=""
          imageRef={imageRef}
          placeholder='blur'
          blurDataURL={`${normalizeImgixUrl(`/t/p/w300/${bgImage}`)}`}
        />
      )
    }
  };

  return (
    <Link href={`/${mediaType === "movie" ? "movies" : "tv"}/${id}`}>
      <div className="rounded-md w-[200px] md:w-[300px] overflow-hidden bg-[#1c1a3e] shadow-xl shadow-black/60 font-satoshi">
        {getThumbnailImg()}
        <p className="px-2 md:px-3 py-2 md:p-3 text-[12px] md:text-[15px] whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
      </div>
    </Link>
  )
}

export default RecommendCards