import { unsplashLoader } from '@/app/utils'
import { getBlurImages } from '@/app/utils/blurImage'
import Image from 'next/image'
import React, { PointerEventHandler, use } from 'react'

type ImageProps = {
  src: string,
  className: string,
  fill?: boolean,
  alt: string,
  width?: number,
  height?: number,
  onPointerEnter?: (e: React.PointerEvent<HTMLImageElement>) => PointerEventHandler<HTMLImageElement>
  id?: string
  sizes?: any
  placeholder?: "blur" | "empty" | undefined
}

const ImgComponent = ({src, className, fill, alt, width, height, onPointerEnter, id, sizes, placeholder}: ImageProps) => {

  const { props } = use(getBlurImages(src))

  // console.log('url: ', unsplashLoader)
  
  return (
    <Image
      // loader={unsplashLoader}
      src={src}
      className={className}
      fill={fill}
      alt={alt}
      width={width}
      height={height}
      // onPointerEnter={(e) => {}}
      id={id}
      // sizes={sizes}
      placeholder="blur"
      blurDataURL={props.image.blurDataURL}
      referrerPolicy='no-referrer'
    />
  )
}

export default ImgComponent