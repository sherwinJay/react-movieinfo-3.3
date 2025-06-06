'use client'

import Link from 'next/link'
import React, { use, useRef } from 'react'
import { imgixLoader, normalizeImgixUrl } from '@/utils/imgixLoader'
import NoImage from '../NoImage/NoImage'
import ImgComponent from '../ImgComponent'

type Props = {
  bgImage: string
  pointerEvent(data: string | null | undefined): void
  title: string
  id: string
  mediaType: string
}

const RecommendCards = ({ id, bgImage, mediaType, title, pointerEvent }: Props) => {

  const imageRef = useRef<HTMLImageElement>(null)

  return (
    <Link href={`/${mediaType === "movie" ? "movies" : "tv"}/${id}`}>
      <div className="rounded-md w-[200px] md:w-[300px] overflow-hidden bg-slate-900 shadow-xl shadow-black/60 hover:text-flamingo-200">
        {bgImage === '' || bgImage === null ? (
          <NoImage
            className="h-[112px] md:h-[10.5em] grid place-content-center bg-gray-400"
            width={40}
            height={40}
          />
        ) : (
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
        )}
        <p className="px-2 md:px-3 py-2 md:p-3 text-[12px] md:text-[14px] whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </p>
      </div>
    </Link>
  )
}

export default RecommendCards