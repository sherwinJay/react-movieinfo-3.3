import { HomeCardData } from '@/types'
import { FC } from 'react'

interface testSectionProps {
  data: HomeCardData[]
}

const TestSection: FC<testSectionProps> = ({ data }) => {

  const slicedData = data.slice(0, 10)


  // console.log(slicedData)


  return (
    <div>
      {slicedData.map(show => (
        <li key={show.id}>
          {show.name}
          <span>{`${(show.vote_average * 10).toFixed(0)}%`}</span>
        </li>
      ))}
    </div>
  )
}

export default TestSection