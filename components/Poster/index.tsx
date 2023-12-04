import { customImgSource, movieDbImgURL } from '@/constant';
import React, { use } from 'react'
import ImgComponent from '../ImgComponent';
import { getBlurImages } from '@/utils/blurImage';
import NoImage from '../NoImage/NoImage';

interface PosterProps {
  poster: string
  title: string
  name: string
  mediaType: string
}

const Poster = ({poster, title, name, mediaType}: PosterProps) => {

  if(poster === null || poster === undefined || poster === "" ) {
    return ( 
      <NoImage
        className='hidden md:grid md:content-center md:min-w-[280px] md:h-[420px] bg-gray-400 rounded-2xl place-content-center font-satoshi'
        width={40}
        height={40}
      />
    );
  }

  const { props } = use(getBlurImages(`${movieDbImgURL}/t/p/w342${poster}`))

  return (
    <div className="hidden md:grid md:content-center md:min-w-[280px] text-4xl overflow-hidden rounded-2xl">
      <ImgComponent
        className="" 
        src={props.image.src} 
        alt={mediaType === 'movies' ? title : name}
        width={props.image.width}
        height={props.image.height}
        placeholder="blur"
        blurDataURL={props.image.blurDataURL}
      />
    </div>
  )
}

export default Poster