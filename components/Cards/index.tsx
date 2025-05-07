import { HomeCardProps } from '@/types'
import Link from 'next/link';
import React, { use } from 'react'
import ImgComponent from '../ImgComponent';
import { movieDbImgURL } from '@/constant';
import { getBlurImages } from '@/utils/blurImage';
import NoImage from '../NoImage/NoImage';

const Cards = ({ title, id, overview, vote_average, backdrop_path, poster_path, template, isMovie, name }: HomeCardProps) => {

  if (poster_path === null || poster_path === undefined || poster_path === "") {
    return (
      <NoImage
        className="w-full h-full bg-gray-400 grid place-content-center absolute"
        width={25}
        height={25}
      />
    );
  }

  const customImg = template === "1" ? poster_path : backdrop_path;
  const imgSize = template === "1" ? "185" : "780"
  const { props } = use(getBlurImages(`${movieDbImgURL}/t/p/w${imgSize}/${customImg}`))

  return (
    <>
      {customImg === null ? (
        <NoImage
          className="w-full h-full bg-gray-400 grid place-content-center absolute"
          width={25}
          height={25}
        />
      ) : (
        <ImgComponent
          src={props.image.src}
          className="translate-x-[-50%] translate-y-[-50%] !top-[50%] !left-[50%] object-cover"
          fill
          alt={isMovie ? title : name}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={props.image.blurDataURL}
        />
      )}
      <div className="h-[100%] max-h-[100%] p-1 sm:p-3 overflow-hidden w-full bg-[rgba(0,0,0,0.5)] hidden text-center place-content-center gap-3 group-hover:grid group-hover:z-10">
        <p className="text-[10px] sm:text-[12px] leading-[12px] md:leading-5 md:text-[16px]">
          {title}
        </p>
        <Link
          href={`/${isMovie ? 'movies' : 'tv'}/${id}`}
          className="w-full px-2 py-[2px] bg-[#c9173d] md:p-1 md:w-[80px] m-auto m rounded-full hover:bg-[#a31231] text-[10px] sm:text-[12px] md:text-[13px]"
        >
          view info
        </Link>
      </div>
    </>
  )
}

export default Cards