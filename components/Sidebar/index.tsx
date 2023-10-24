import { SidebarData } from '@/types'
import React from 'react'
import ProductionCompany from './ProductionCompany';
import SidebarCrews from './SidebarCrews';
import MovieInfo from './MovieInfo';
import TVSeriesInfo from './TVSeriesInfo';

interface Props {
  isMovie: boolean,
  contentData: SidebarData
}

const Sidebar = ({isMovie, contentData}: Props) => {

  const { 
    budget, 
    credits,
    production_companies, 
    revenue, 
    status,
    original_name,
    number_of_episodes
  } = contentData;

  return (
    <div className="grid gap-3 py-5 md:py-0 font-satoshi">
      {
        isMovie ? (
          // Movie Container
          <MovieInfo 
            budget={budget}
            revenue={revenue}
          />
        ) : (
          // TV Series Container
          <TVSeriesInfo 
            title={original_name}
          />
        )
      }
      {/* Status Container */}
      <div>
        <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
          Status
        </h4>
        <p className="text-[14px] md:text-[16px]">
          {status}
        </p>
      </div>
      {/* Production Container */}
      <ProductionCompany 
        productionCompanies={production_companies} 
      />
      {
        isMovie ? (
          // Crews Container
          <SidebarCrews crews={credits.crew} />
        ) : (
          // Total Episodes Container
          <div>
            <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
              Total Episodes
            </h4>
            <p>
              {`${number_of_episodes} episodes`}
            </p>
          </div>
        )
      }
    </div>
  )
}

export default Sidebar