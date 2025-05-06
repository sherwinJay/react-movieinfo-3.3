'use client'

import { movieDbImgURL } from '@/constant'
import { hexToRGB, useBgColor, wc_hex_is_light } from '@/utils/useBgColor'
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
      <SkeletonBanner />
    )
  }

  const isColorLight = wc_hex_is_light(data!)
  const bannerGradientTop = hexToRGB(data!, 1)
  const bannerGradientBottom = hexToRGB(data!, 0.5)

  const bannerBg = {
    backgroundImage: `linear-gradient(${bannerGradientTop},${bannerGradientBottom}), url(${movieDbImgURL}/t/p/original/${imageUrl})`,
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