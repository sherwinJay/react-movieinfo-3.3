import { FC } from 'react'

interface MovieInfoProps {
  budget: string | number
  revenue: string | number
}

const MovieInfo: FC<MovieInfoProps> = ({ budget, revenue }) => {
  return (
    <>
      {/* Budget Container */}
      <div>
        <h4 className="sidebar_title">
          Budget
        </h4>
        <p className="sidebar_text">
          {`${budget !== 0 ? (`$ ${budget?.toLocaleString()}`) : '-'}`}
        </p>
      </div>
      {/* Revenue Container */}
      <div>
        <h4 className="sidebar_title">
          Revenue
        </h4>
        <p className="sidebar_text">
          {`${revenue !== 0 ? (`$ ${revenue?.toLocaleString()}`) : '-'}`}
        </p>
      </div>
    </>
  )
}

export default MovieInfo