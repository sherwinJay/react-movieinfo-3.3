'use client'

import { unsplashLoader } from '@/utils'
import { getBlurImages } from '@/utils/blurImage'
import { imgixLoader } from '@/utils/imgixLoader'
import Image, { ImageLoader, ImageProps, StaticImageData } from 'next/image'
import React, { PointerEventHandler, Ref, use, useState } from 'react'
import Imgix from 'react-imgix'
import no_image from '@/public/images/image-off.svg'
import clsx from 'clsx'

type LqipExampleProps = {
  image: Pick<ImageProps, "src" | "width" | "height" | "blurDataURL">;
};


type ImageProps2 = {
  src: string | StaticImageData,
  className?: string | undefined,
  fill?: boolean,
  alt: string,
  width?: number,
  height?: number,
  onPointerEnter?: React.PointerEventHandler<HTMLImageElement> | undefined
  id?: string
  sizes?: string
  placeholder?: "blur" | "empty" | undefined
  blurDataURL?: string
  quality?: number
  imageRef?: Ref<HTMLImageElement | null> | undefined
}

const ImgComponent = ({src, className, fill, alt, width, height, onPointerEnter, id, sizes, placeholder, blurDataURL, quality, imageRef}: ImageProps2) => {
  // const { props } = use(getBlurImages(src))

  // const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src)
  const [isErrorImage, setIsErrorImage] = useState<boolean>(false)

  const errorClassName = {
    minHeight: `${height}px`,
    maxHeight: `${height}px`,
  }

  return (
      <Image
        // loader={imgixLoader}
        src={isErrorImage ? no_image : src}
        className={
          clsx(
            !isErrorImage && className,
            isErrorImage && `bg-gray-400 grid place-content-center p-[1.5em] md:p-[3.5em]`
          )
        }
        fill={fill}
        alt={alt}
        width={width}
        height={height}
        onPointerEnter={onPointerEnter}
        id={id}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        referrerPolicy='no-referrer'
        quality={quality}
        unoptimized={true}
        ref={imageRef}
        // onError={() => setIsErrorImage(true)}
        // style={errorClassName}
      />
 
  )
}

export default ImgComponent