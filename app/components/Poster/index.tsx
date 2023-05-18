import { movieDbImgURL } from '@/app/constant';
import React from 'react'
import ImgComponent from '../ImgComponent';

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
      return ( 
        <div className="hidden md:grid md:content-center md:min-w-[280px]">
          <ImgComponent
            className="overflow-hidden rounded-2xl" 
            src={`${movieDbImgURL}/t/p/w342${poster}`} 
            alt={mediaType === 'movies' ? title : name}
            width={280}
            height={420}
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