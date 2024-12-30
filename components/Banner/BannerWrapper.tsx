'use client'

import { movieDbImgURL } from '@/constant'
import { useBgColor } from '@/utils/useBgColor'
import clsx from 'clsx'
import React, { FC } from 'react'

type Props = {
  children: React.ReactNode
  imageUrl: string
  backdrop: string
}

const BannerWrapper: FC<Props> = ({ children, imageUrl, backdrop }) => {
  // const testImage = `${movieDbImgURL}/t/p/original/${imageUrl}&api_key=${process.env.MOVIE_DATABASE_ID}`
  // const { data, loading, error } = useColor(testImage, 'hex', { crossOrigin: 'anonymous' })

  const { data, loading } = useBgColor(imageUrl)

  const bannerBg = {
    backgroundImage: `linear-gradient(${data},rgba(0,0,0,0.6)), url(${movieDbImgURL}/t/p/original/${imageUrl})`,
  };

  if (loading) {
    <p>loading...</p>
  }

  return (
    <div
      className={
        clsx(
          `h-full bg-cover bg-center bg-no-repeat`,
          backdrop === null && '!bg-slate-700 !bg-none',
        )
      }
      style={bannerBg}>
      {children}
    </div>
  )
}

export default BannerWrapper