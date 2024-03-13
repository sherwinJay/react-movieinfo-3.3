'use client'

import Image, { ImageLoader, ImageProps, StaticImageData } from 'next/image'
import React, { PointerEventHandler, Ref, use, useState } from 'react'
import no_image from '@/public/images/image-off.svg'
import clsx from 'clsx'
import { ImageProps2 } from '@/types'

const ImgComponent = ({ src, className, fill, alt, width, height, onPointerEnter, id, sizes, placeholder, blurDataURL, quality, imageRef }: ImageProps2) => {
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