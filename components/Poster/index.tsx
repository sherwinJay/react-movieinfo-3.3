import { customImgSource, movieDbImgURL } from '@/constant';
import React, { use } from 'react'
import ImgComponent from '../ImgComponent';
import { getBlurImages } from '@/utils/blurImage';
import NoImage from '../NoImage/NoImage';
import { cn } from '@/lib/utils';
import { PosterProps } from '@/types';

const Poster = ({ poster, title, name, mediaType, imageSize }: PosterProps) => {

  if (poster === null || poster === undefined || poster === "") {
    return (
      <NoImage
        className={cn('grid content-center bg-gray-400 place-content-center',
          imageSize === "w342" && 'hidden! md:min-w-[280px] md:h-[420px] rounded-2xl',
          imageSize === "w154" && 'w-full h-full md:min-w-[150px] md:h-[231px] rounded-lg',
        )}
        width={40}
        height={40}
      />
    );
  }

  const { props } = use(getBlurImages(`${movieDbImgURL}/t/p/${imageSize}${poster}`))

  return (
    <div className={cn("md:grid md:content-center  overflow-hidden",
      imageSize === "w342" && 'hidden md:min-w-[280px] text-4xl rounded-2xl',
      imageSize === "w154" && 'md:min-w-[150px] md:h-[231px] rounded-lg',
    )}>
      <ImgComponent
        className=""
        src={props.image.src}
        alt={mediaType === 'movie' ? title : name}
        width={props.image.width}
        height={props.image.height}
        placeholder="blur"
        blurDataURL={props.image.blurDataURL}
      />
    </div>
  )
}

export default Poster