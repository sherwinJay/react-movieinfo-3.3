import React from 'react'
import { BannerContentData, BannerProps, HomeCardData } from '@/types'
import Poster from '../Poster';
import BannerContent from './BannerContent';
import BannerIcons from './BannerIcons';
import Crews from './Crews';
import { movieDbImgURL } from '@/constant';
import clsx from 'clsx';

const Banner = ({ contentData, mediaType }: BannerProps) => {

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
  };

  const showCategory = mediaType === 'movies' ? 'movies' : 'tv';

  return (
    <div
      className={
        clsx(
          `h-full bg-cover bg-center bg-no-repeat`,
          backdrop === null && '!bg-slate-700 !bg-none',
        )
      }
      style={bannerBg}
    >
      <div className='w-[100%] m-auto px-[1em] py-[2em] md:p-[3em] md:grid md:grid-cols-bannerGrid_2Col md:gap-5 xl:w-[1200px]'>
        <Poster
          poster={poster}
          title={title}
          name={name}
          mediaType={mediaType}
        />
        <section className="flex flex-col gap-[15px]">
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
          <div className='leading-5'>
            <p className="font-semibold mb-1 text-[1rem] md:leading-{1.6rem} md:text-[1.2rem]">
              {tagline}
            </p>
            <p className='text-[0.8rem] md:text-[0.95rem] md:leading-[1.3rem]'>
              {overview}
            </p>
          </div>
          <ul className="mt-[10px] grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-3">
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