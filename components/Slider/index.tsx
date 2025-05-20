'use client'

import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import 'react-awesome-slider/dist/custom-animations/fall-animation.css'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import { HomeCardData } from '@/types'
import Link from 'next/link'
import { bannerWrapper } from './styles'
import { movieDbImgURL, movieDbURL } from '@/constant'
import { getPopularMovies } from '@/services/queries'
import SkeletonSlider from '../Skeleton/SkeletonSlider'

const Slider = () => {

  const popularMoviesQuery = getPopularMovies(`${movieDbURL}/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_MOVIE_DATABASE_ID}&language=en-US&page=1`)
  const slicedMovies = popularMoviesQuery.data?.slice(0, 5)
  const AutoplaySlider = withAutoplay(AwesomeSlider)

  if (popularMoviesQuery.isLoading) {
    return (
      <SkeletonSlider />
    )
  }

  return (
    <AutoplaySlider
      className={`bg-neutral-900 relative h-[auto] lg:h-[520px] ${bannerWrapper}`}
      animation="fallAnimation"
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      bullets={true}
      alt={'movieTitle'}
    >
      {slicedMovies.map((movie: HomeCardData) => {
        return (
          <div
            key={movie.id}
            data-src={`${movieDbImgURL}/t/p/original/${movie.backdrop_path}`}
            className="my-auto w-[800px] px-4"
            data-alt={movie.title}
          >
            <h2 className="relative z-10 text-center text-[1.3rem] leading-7 mb-[10px] font-bold md:mb-[15px] md:text-[2.7rem] md:leading-[2.9rem]">
              {movie.title}
            </h2>
            <p className="relative z-10 text-center md:my-3">
              {movie.overview}
            </p>
            <Link
              href={`/movies/${movie.id}`}
              className="relative mt-5 z-10 text-center block w-[fit-content] m-auto hover:bg-[#c9173d] px-4 py-[6px] border-[1px] border-white border-solid rounded-full hover:border-[#c9173d]"
            >
              See Information
            </Link>
          </div>
        );
      })}
    </AutoplaySlider>
  )
}

export default Slider