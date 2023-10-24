import { FC } from 'react'

interface TVSeriesInfoProps {
  title: string
}

const TVSeriesInfo: FC<TVSeriesInfoProps> = ({title}) => {
  return (
    <div>
      <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
        Original Name
      </h4>
      <p className="text-[14px] md:text-[16px]">
        {title}
      </p>
    </div>
  )
}

export default TVSeriesInfo