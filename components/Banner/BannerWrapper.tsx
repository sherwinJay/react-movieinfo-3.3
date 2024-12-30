'use client'

import { movieDbImgURL } from '@/constant'
import { useBgColor } from '@/utils/useBgColor'
import clsx from 'clsx'
import React, { FC } from 'react'
import SkeletonBanner from '../Skeleton/SkeletonBanner'
import { cn } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  imageUrl: string
  poster: string
}

const BannerWrapper: FC<Props> = ({ children, imageUrl, poster }) => {
  const { data, loading } = useBgColor(poster)
  const bannerBg = {
    backgroundImage: loading ? 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(${movieDbImgURL}/t/p/original/${imageUrl})' : `linear-gradient(${data},rgba(0,0,0,0.7)), url(${movieDbImgURL}/t/p/original/${imageUrl})`,
  };

  // const getColor = !loading && wc_hex_is_light(data!)

  // console.log(getColor)

  // function wc_hex_is_light(color: string) {
  //   const hex = color.replace('#', '');
  //   const c_r = parseInt(hex.substring(0, 0 + 2), 16);
  //   const c_g = parseInt(hex.substring(2, 2 + 2), 16);
  //   const c_b = parseInt(hex.substring(4, 4 + 2), 16);
  //   const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
  //   return brightness > 155;
  // }

  if (loading) {
    return (
      <>
        <SkeletonBanner />
      </>
    )
  }

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