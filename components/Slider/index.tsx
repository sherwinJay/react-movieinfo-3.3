'use client'

import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { HomeCardData } from '@/types';
import Link from 'next/link';
import { bannerWrapper } from './styles';
import { movieDbImgURL } from '@/constant';

type Props = {
  movieData: HomeCardData[]
}

const Slider = ({movieData}: Props) => {

  const slicedMovies = movieData?.slice(0,5);

  const sliderMovies = slicedMovies.map((movie) => {
    return (
      <div key={movie.id} 
        data-src={`${movieDbImgURL}/t/p/original/${movie.backdrop_path}`}
        className="my-auto w-[800px] px-4 font-satoshi"
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
  })

  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider 
      className={bannerWrapper}
      animation="fallAnimation"
      play={true}
      cancelOnInteraction={false}
      interval={6000}
      bullets={true}
      alt={'movieTitle'}
    >
      { sliderMovies }
    </AutoplaySlider>
  )
}

export default Slider