import React from 'react'
import { BannerContentData, BannerProps, HomeCardData } from '@/types'
import Poster from '../Poster';
import BannerContent from './BannerContent';
import BannerIcons from './BannerIcons';
import Crews from './Crews';
import BannerWrapper from './BannerWrapper';

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

  return (
    <BannerWrapper imageUrl={backdrop} poster={poster}>
      <div className='w-[100%] m-auto px-[1em] py-[2em] md:p-[3em] md:grid md:grid-cols-bannerGrid_2Col md:gap-5 lg:px-2 xl:w-[1200px]'>
        <Poster
          poster={poster}
          title={title}
          name={name}
          mediaType={mediaType}
          imageSize="w342"
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
            mediaType={mediaType}
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
    </BannerWrapper>
  )
}

export default Banner