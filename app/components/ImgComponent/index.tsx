'use client'

import { unsplashLoader } from '@/utils'
import { getBlurImages } from '@/utils/blurImage'
import { imgixLoader } from '@/utils/imgixLoader'
import Image, { ImageLoader, ImageProps, StaticImageData } from 'next/image'
import React, { PointerEventHandler, use } from 'react'
import Imgix from 'react-imgix'

type LqipExampleProps = {
  image: Pick<ImageProps, "src" | "width" | "height" | "blurDataURL">;
};


type ImageProps2 = {
  src: string | StaticImageData,
  className?: string,
  fill?: boolean,
  alt: string,
  width?: number,
  height?: number,
  onPointerEnter?: (e: React.PointerEvent<HTMLImageElement>) => PointerEventHandler<HTMLImageElement>
  id?: string
  sizes?: string
  placeholder?: "blur" | "empty" | undefined
  blurDataURL?: string
  quality?: number
}

const ImgComponent = ({src, className, fill, alt, width, height, onPointerEnter, id, sizes, placeholder, blurDataURL, quality}: ImageProps2) => {
  // const { props } = use(getBlurImages(src))

  return (
      <Image
        // loader={imgixLoader}
        src={src}
        className={className}
        fill={fill}
        alt={alt}
        width={width}
        height={height}
        // onPointerEnter={(e) => {}}
        id={id}
        sizes={sizes}
        placeholder="blur"
        blurDataURL={blurDataURL}
        referrerPolicy='no-referrer'
        quality={quality}
        unoptimized={true}
      />
 
  )
}

export default ImgComponent