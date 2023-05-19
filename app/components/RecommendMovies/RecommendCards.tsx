import { movieDbImgURL } from '@/app/constant'
import Link from 'next/link'
import React, { use, useRef } from 'react'
import Image from 'next/image'
import { getBlurImages } from '@/app/utils/blurImage'
import { normalizeUnsplashUrl, unsplashLoader } from '@/app/utils'
import { imgixLoader } from '@/app/utils/imgixLoader'

type Props = {
  bgImage: string
  pointerEvent(imageId: string | null | undefined): void
  title: string
  id: string
  mediaType: string
}


const RecommendCards = ({id, bgImage, mediaType, title, pointerEvent}: Props) => {

  const imageRef = useRef<HTMLImageElement>(null)
   
  // const { props } = use(getBlurImages(`${movieDbImgURL}/t/p/w300/${bgImage}`))

  // template for image thumbnails 

  // console.log('data: ', normalizeUnsplashUrl(`/t/p/w300/${bgImage}`))

  const getThumbnailImg = () => { 
    if(bgImage === '' || bgImage === null){
      return (
        <p className="h-[10.5em] grid place-content-center bg-[#f14066]">
          NO IMAGE
        </p>
      )
    }else{
      return (
        <Image
          loader={imgixLoader}
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
          // unoptimized={true}
        />
      )
    }
  };

  return (
    <Link href={`/${mediaType === "movie" ? "movies" : "tv"}/${id}`}>
      <div className="rounded-[5px] w-[300px] overflow-hidden bg-[#1c1a3e] shadow-xl shadow-black/60">
        <div className="">
          {getThumbnailImg()}
        </div>
        <p className="px-3 py-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
      </div>
    </Link>
  )
}

export default RecommendCards