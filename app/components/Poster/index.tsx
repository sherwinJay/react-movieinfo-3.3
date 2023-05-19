import { customImgSource, movieDbImgURL } from '@/app/constant';
import React, { use } from 'react'
import ImgComponent from '../ImgComponent';
import { getBlurImages } from '@/app/utils/blurImage';

interface PosterProps {
  poster: string
  title: string
  name: string
  mediaType: string
}

const Poster = ({poster, title, name, mediaType}: PosterProps) => {

const getImgPoster = () => {
    if(poster === null || poster === undefined || poster === "" ) {
      return ( 
        <div className="hidden md:grid md:content-center md:min-w-[280px] md:h-[420px] bg-[#f14066] rounded-2xl place-content-center">
          <p>No Image</p>
        </div>
      );
    } else {

      const { props } = use(getBlurImages(`${customImgSource}/t/p/w342${poster}`))

      return ( 
        <div className="hidden md:grid md:content-center md:min-w-[280px]">
          <ImgComponent
            className="overflow-hidden rounded-2xl" 
            src={props.image.src} 
            alt={mediaType === 'movies' ? title : name}
            width={280}
            height={420}
            blurDataURL={props.image.blurDataURL}
          />
        </div>
    
      );
    }
  };

  return (
    <>
     {getImgPoster()} 
    </>
  )
}

export default Poster