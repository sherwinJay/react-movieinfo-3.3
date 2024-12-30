'use client'

import { movieDbImgURL } from '@/constant'
import { useBgColor } from '@/utils/useBgColor'
import clsx from 'clsx'
import React, { FC } from 'react'

type Props = {
  children: React.ReactNode
  imageUrl: string
}

const BannerWrapper: FC<Props> = ({ children, imageUrl }) => {

  const { data, loading } = useBgColor(imageUrl)
  const bannerBg = {
    backgroundImage: loading ? 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${movieDbImgURL}/t/p/original/${imageUrl})' : `linear-gradient(${data},rgba(0,0,0,0.6)), url(${movieDbImgURL}/t/p/original/${imageUrl})`,
  };

  return (
    <div
      className={
        clsx(
          `h-full bg-cover bg-center bg-no-repeat`,
          imageUrl === null && '!bg-slate-700 !bg-none',
        )
      }
      style={bannerBg}
    >
      {children}
    </div>
  )
}

export default BannerWrapper