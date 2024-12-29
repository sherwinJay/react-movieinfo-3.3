'use client'

import Color, { Palette, useColor } from 'color-thief-react'
import React from 'react'

type Props = {
  title: string
  name: string
  genres: {
    map(arg0: (genre: { name: string; }) => string): string
    name: string
  }
  releaseDate: string | undefined
  first_air_date: string | null
  mediaType: string
  imageUrl: string
}

const BannerContent = ({ title, name, genres, releaseDate, first_air_date, mediaType, imageUrl }: Props) => {


  console.log(imageUrl)
  const testImage = "https://image.tmdb.org/t/p/w342/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg"

  const { data, loading, error } = useColor(testImage, 'hex', { crossOrigin: 'anonymous' })

  console.log('dataColor: ', data)

  const getGenres = genres?.map((genre: { name: string }) => genre?.name)
  const sliceGenres = getGenres.slice(0, 3);
  const showGenres = sliceGenres.toString().replace(/,/g, ', ')
  const modifiedReleaseDate = releaseDate !== null ? releaseDate?.replace(/-/g, '/') : ''
  const modifiedAirDate = first_air_date !== null ? first_air_date?.replace(/-/g, '/') : ''
  const showDate = mediaType === 'movies' ? modifiedReleaseDate : modifiedAirDate
  const showTitle = mediaType === 'movies' ? title : name

  return (
    <div className=''>
      <h1 className="text-[1.6rem] leading-7 md:mt-[20px] font-bold md:text-[2.4rem] md:leading-10">
        {showTitle}
      </h1>
      {/* <Color src={testImage} crossOrigin="anonymous" format="hex">
        {({ data, loading }) => {
          if (loading) return <p>...loading</p>;
          console.log('color2: ', data)
          return (
            <div>
              Predominant color: <strong>{data}</strong>
            </div>
          );
        }}
      </Color> */}
      <div style={{ color: data }}>
        Text with the predominant color
      </div>
      <div className=" mt-0 md:mt-2 flex items-center gap-1">
        <span className="bg-[#c9173d] min-[320px]:text-[8px] md:text-[11px] lg:text-[12px] leading-3 rounded-xl px-[0.45em] py-[0.2em] md:leading-4">
          {`${showDate} (US)`}
        </span>
        <span className='min-[320px]:text-[12px] text-[14px] md:text-[16px] !leading-1'>
          {` | ${showGenres}`}
        </span>
      </div>
    </div>
  )
}

export default BannerContent