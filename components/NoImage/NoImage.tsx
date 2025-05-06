import { FC } from 'react'

import no_image from '@/public/images/image-off.svg'
import ImgComponent from '../ImgComponent'
import { NoImageProps } from '@/types'

const NoImage: FC<NoImageProps> = ({ className, width, height }) => {
  return (
    <div className={className}>
      <ImgComponent
        src={no_image}
        alt="no image"
        width={width}
        height={height}
        placeholder="empty"
      />
    </div>
  )
}

export default NoImage