import React from 'react'

type Props = {
  title: string,
  name: string,
  genres: {
    map(arg0: (genre: { name: string; }) => string): string;
    name: string
  }
  releaseDate: string | undefined
  first_air_date: string | null
  mediaType: string
}

const BannerContent = ({ title, name, genres, releaseDate, first_air_date, mediaType }: Props) => {

  const showGenres = genres?.map((genre: {name: string}) => genre?.name).slice(0,3).toString().replace(/,/g,', ');
  const modifiedReleaseDate = releaseDate !== null ? releaseDate?.replace(/-/g,'/') : '';
  const modifiedAirDate = first_air_date !== null ? first_air_date?.replace(/-/g,'/') : '';

  const showDate = mediaType === 'movies' ? modifiedReleaseDate : modifiedAirDate
  const showTitle = mediaType === 'movies' ? title : name


  return (
    <div className='font-satoshi'>
      <h1 className="text-[1.6rem] leading-7 md:mt-[20px] font-bold md:text-[2.4rem] md:leading-8">
        { showTitle }
      </h1>
      <div className=" mt-0 md:mt-1">
        <span className="bg-[#c9173d] text-[10px] md:text-[12px] leading-3 rounded-xl px-[0.45em] py-[0.2em] md:leading-10"> 
          {`${showDate} (US)`}
        </span>
        <span className='text-[14px] md:text-[16px] !leading-1'>
          {` | ${showGenres}`}
        </span>
      </div>
    </div>
  )
}

export default BannerContent