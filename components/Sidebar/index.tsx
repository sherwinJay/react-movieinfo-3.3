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

const Sidebar = ({ isMovie, contentData }: Props) => {

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
        <h4 className="sidebar_title">
          Status
        </h4>
        <p className="sidebar_text">
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
            <h4 className="sidebar_title">
              Total Episodes
            </h4>
            <p className='sidebar_text'>
              {`${number_of_episodes} episodes`}
            </p>
          </div>
        )
      }
    </div>
  )
}

export default Sidebar