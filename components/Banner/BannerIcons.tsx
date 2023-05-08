import circleRating from '@/constant/circleRating';
import { ResultsProps } from '@/types';
import React from 'react'

interface Props {
  mediaType?: string,
  runtime: string | number | undefined,
  episodeTime?: any,
  videos: {
    results: ResultsProps[]
  }
  votes: number
}

const BannerIcons = ({mediaType, runtime, episodeTime, videos, votes}: Props) => {

  // console.log('data: ', videos)

  const { circleBorder } = circleRating(votes)

  const computeRuntime = () => {
    const computeHours = Math.floor((mediaType === 'movies' ? runtime : episodeTime?.length > 0 ? episodeTime[0] : 0) / 60);
    const computeMinutes = (mediaType === 'movies' ? runtime : episodeTime?.length > 0 ? episodeTime[0] : 0) % 60;

    return computeHours >= 1 ? `${computeHours}h ${computeMinutes}m` : `${computeMinutes}m`;
  };

  const getTrailer = () => {
    if(videos?.results?.length > 0 && videos?.results[0]?.hasOwnProperty("key")){
      return (
        <a  
          href={`https://www.youtube.com/watch?v=${videos?.results[0]?.key}`}
          className="flex gap-[2px] md:gap-1 items-center"
          target="_blank"
          rel="noreferrer"
        >
          {/* <PlayCircleFilledWhiteIcon/> */}
          <svg className='w-[30px]' fill="#c9173d" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
          </svg>
          Play Trailer
        </a>
      )
    }
    return "";
  }

  return (
    <div className='flex gap-[15px] md:gap-6 items-center'>
      <div className="flex gap-[2px] md:gap-2 items-center">
       <span style={circleBorder}>
        {votes.toFixed(1)}
       </span>
       <p className="w-[55px] leading-5 md:w-[88px]">User Rating</p>
      </div>
      <div className="flex gap-[2px] md:gap-1 items-center">
        <svg className='w-[30px]' fill="#c9173d" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
        </svg>
       { computeRuntime() }
      </div>
      <div className="">
       { getTrailer() }
      </div>
    </div>
    
  )
}
 
export default BannerIcons