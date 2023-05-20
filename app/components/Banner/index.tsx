import React from 'react'

import { BannerContentData, HomeCardData } from '@/types'
import Poster from '../Poster';
import BannerContent from './BannerContent';
import BannerIcons from './BannerIcons';
import Crews from './Crews';
import { movieDbImgURL } from '@/app/constant';

type Props = {
  contentData: BannerContentData,
  mediaType: string
}

const Banner = ({contentData, mediaType}: Props) => {

  const {
    id,
    backdrop_path: backdrop,
    poster_path: poster,
    title,
    tagline,
    overview,
    popularity,
    vote_average,
    runtime,
    episode_run_time,
    genres,
    credits,
    created_by,
    videos,
    release_date: releaseDate,
    first_air_date: first_air_date,
    name
  } = contentData;

  const bannerBg = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${movieDbImgURL}/t/p/original/${contentData.backdrop_path})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
  };

  const showCategory = mediaType === 'movies' ? 'movies' : 'tv';

  return (
    <div style={bannerBg}>
      <div className='w-[100%] m-auto px-[1em] py-[2em] md:p-[3em] md:flex md:gap-5 xl:w-[1200px]'>
        <Poster
          poster={poster}
          title={title}
          name={name}
          mediaType={mediaType}
        />
        <section className="flex flex-col gap-[20px]">
          <BannerContent
            title={title}
            name={name}
            genres={genres}
            releaseDate={releaseDate}
            first_air_date={first_air_date}
            mediaType={mediaType}
          />
          <BannerIcons 
            runtime={runtime}
            episodeTime={episode_run_time}
            mediaType={showCategory}
            videos={videos}
            votes={vote_average}
          />
          <div>
            <p className="font-semibold mb-1 text-[1rem] leading-5 md:leading-7 md:text-[1.2rem]">
              {tagline}
            </p>
            <p className='text-[0.8rem] md:text-[0.95rem] leading-5 md:leading-[1.3rem]'>
              {overview}
            </p>
          </div>
          <ul className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 md:gap-2">
            <Crews 
              credits={credits}
              created_by={created_by}
              mediaType={mediaType}
            />
          </ul>
         
        </section>
      </div>
    </div>
  )
}

export default Banner