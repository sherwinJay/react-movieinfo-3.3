import { FC, use } from 'react'
import NoImage from '../NoImage/NoImage'
import { getBlurImages } from '@/utils/blurImage'
import { movieDbImgURL } from '@/constant'
import ImgComponent from '../ImgComponent'

interface CastImageProps {
  profilePath: string | null
  name: string
}

const CastImage: FC<CastImageProps> = ({profilePath, name}) => {

  if(profilePath === null){
    return (
      <NoImage
        className="h-[192px] md:h-[14.45em] overflow-hidden grid place-content-center bg-gray-400"
        width={35}
        height={35}
      />
    )
  }

  const { props } = use(getBlurImages(`${movieDbImgURL}/t/p/w154/${profilePath}`))

  return (
    <div className="relative overflow-hidden">
      <ImgComponent
        className=""
        src={props.image.src} 
        alt={name}
        width={props.image.width}
        height={props.image.height}
        placeholder='blur'
        blurDataURL={props.image.blurDataURL}
      />
    </div>
  )
}

export default CastImage