import { FC } from 'react'

import no_image from '@/public/images/no-image.png'
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
      />
    </div>
  )
}

export default NoImage