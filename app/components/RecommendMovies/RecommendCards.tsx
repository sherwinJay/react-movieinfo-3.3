import { movieDbImgURL } from '@/constant'
import Link from 'next/link'
import React, { use, useRef } from 'react'
import Image from 'next/image'
import { getBlurImages } from '@/utils/blurImage'
import { normalizeUnsplashUrl, unsplashLoader } from '@/utils'
import { imgixLoader } from '@/utils/imgixLoader'

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
        <p className="h-[112px] md:h-[10.5em] grid place-content-center bg-[#f14066]">
          NO IMAGE
        </p>
      )
    }else{
      return (
        <Image
          // loader={imgixLoader}
          src={`${normalizeUnsplashUrl(`/t/p/w300/${bgImage}`)}`}
          alt={title} 
          onPointerEnter={() => pointerEvent(imageRef?.current?.id)}
          id={bgImage}
          width={300}
          height={169}
          className=""
          ref={imageRef}
          referrerPolicy='no-referrer'
          placeholder='blur'
          blurDataURL={`${normalizeUnsplashUrl(`/t/p/w300/${bgImage}`)}`}
          unoptimized={true}
        />
      )
    }
  };

  return (
    <Link href={`/${mediaType === "movie" ? "movies" : "tv"}/${id}`}>
      <div className="rounded-[5px] w-[200px] md:w-[300px] overflow-hidden bg-[#1c1a3e] shadow-xl shadow-black/60 font-satoshi">
        <div className="">
          {getThumbnailImg()}
        </div>
        <p className="px-3 py-2 md:p-3 text-[12px] md:text-[15px] whitespace-nowrap overflow-hidden text-ellipsis ">
          {title}
        </p>
      </div>
    </Link>
  )
}

export default RecommendCards