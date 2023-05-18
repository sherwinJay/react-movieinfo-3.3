import { movieDbImgURL } from '@/app/constant'
import Link from 'next/link'
import React, { useRef } from 'react'
import Image from 'next/image'

type Props = {
  bgImage: string
  pointerEvent(imageId: string | null | undefined): void
  title: string
  id: string
  mediaType: string
}


const RecommendCards = ({id, bgImage, mediaType, title, pointerEvent}: Props) => {

  const imageRef = useRef<HTMLImageElement>(null)

  // template for image thumbnails 
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
          src={`${movieDbImgURL}/t/p/w300/${bgImage}`} 
          alt={title} 
          onPointerEnter={() => pointerEvent(imageRef?.current?.id)}
          id={bgImage}
          width={300}
          height={169}
          className=""
          ref={imageRef}
          referrerPolicy='no-referrer'
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