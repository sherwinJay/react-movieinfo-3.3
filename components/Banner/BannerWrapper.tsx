'use client'

import { movieDbImgURL } from '@/constant'
import { useBgColor, wc_hex_is_light } from '@/utils/useBgColor'
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

  if (loading) {
    return (
      <>
        <SkeletonBanner />
      </>
    )
  }

  const isColorLight = !loading && wc_hex_is_light(data!)
  const bannerBg = {
    backgroundImage: `linear-gradient(${data},rgba(0,0,0,0.6)), url(${movieDbImgURL}/t/p/original/${imageUrl})`,
  };

  return (
    <div
      className={cn(
        `h-full bg-cover bg-center bg-no-repeat`,
        imageUrl === null && '!bg-slate-700 !bg-none',
        isColorLight && 'text-black'
      )}
      style={bannerBg}
    >
      {children}
    </div>
  )
}

export default BannerWrapper