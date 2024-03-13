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
        <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
          Budget
        </h4>
        <p className="text-[14px] md:text-[16px]">
          {`${budget !== 0 ? (`$ ${budget?.toLocaleString()}`) : '-'}`}
        </p>
      </div>
      {/* Revenue Container */}
      <div>
        <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
          Revenue
        </h4>
        <p className="text-[14px] md:text-[16px]">
          {`${revenue !== 0 ? (`$ ${revenue?.toLocaleString()}`) : '-'}`}
        </p>
      </div>
    </>
  )
}

export default MovieInfo