import { FC } from 'react'

import no_image from '@/public/images/image-off.svg'
import ImgComponent from '../ImgComponent'

interface NoImageProps {
  className: string
  width: number
  height: number
}

const NoImage: FC<NoImageProps> = ({className, width, height}) => {
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