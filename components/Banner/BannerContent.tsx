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

  const showGenres = genres.map((genre: {name: string}) => genre.name).slice(0,3).toString().replace(/,/g,', ');
  const modifiedReleaseDate = releaseDate !== null ? releaseDate?.replace(/-/g,'/') : '';
  const modifiedAirDate = first_air_date !== null ? first_air_date?.replace(/-/g,'/') : '';

  const showDate = mediaType === 'movies' ? modifiedReleaseDate : modifiedAirDate
  const showTitle = mediaType === 'movies' ? title : name


  return (
    <div>
      <h1 className="text-[1.6rem] leading-9 md:mt-[15px] font-bold md:text-[2.4rem] md:leading-10">
        { showTitle }
      </h1>
      <div className="mt-2">
        <span className="bg-[#c9173d] text-[12px] rounded-xl px-[0.45em] py-[0.2em]">
          {`${showDate} (US)`}
        </span>
        <span>{ ` | ${showGenres}` }</span>
      </div>
    </div>
  )
}

export default BannerContent