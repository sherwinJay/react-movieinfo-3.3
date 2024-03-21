import { FC } from 'react'

interface TVSeriesInfoProps {
  title: string
}

const TVSeriesInfo: FC<TVSeriesInfoProps> = ({ title }) => {
  return (
    <div>
      <h4 className="sidebar_title">
        Original Name
      </h4>
      <p className="sidebar_text">
        {title}
      </p>
    </div>
  )
}

export default TVSeriesInfo