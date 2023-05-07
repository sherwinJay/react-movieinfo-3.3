import { SidebarData } from '@/types'
import React from 'react'

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

  const slicedProductionCompany = production_companies?.slice(0,4);
  const slicedCrew = credits.crew?.slice(0,4);

  const getCompanies = slicedProductionCompany?.map((company) => (
    <p className="" key={company.id}>
      {company.name}
    </p>
  ))
  
  const getCrew = slicedCrew?.map((crew) => (
    <div key={crew.credit_id}>
      <p className="leading-5">{crew.name}</p>
      <p className="text-[13px] italic">{crew.job}</p>
    </div>
  ))


  return (
    <div className="grid gap-3 py-5 mb-6 border-b-2 border-[#121c31] md:py-0 md:mb-0 md:border-none">
      {
        isMovie ? (
          <>
            <div>
              <h4 className="text-[#c9173d] font-bold text-[18px]">Budget</h4>
              <p>{`$ ${budget !== "" ? budget?.toLocaleString() : '-'}`}</p>
            </div>
            <div>
              <h4 className="text-[#c9173d] font-bold text-[18px]">Revenue</h4>
              <p>{`$ ${revenue !== "" ? revenue?.toLocaleString(): '-'}`}</p>
            </div>
          </>
        ) : (
          <div>
            <h4 className="text-[#c9173d] font-bold text-[18px]">Original Name</h4>
            <p>{original_name}</p>
          </div>
        )
      }

      <div>
        <h4 className="text-[#c9173d] font-bold text-[18px]">Status</h4>
        <p>{status}</p>
      </div>
      <div>
        <h4 className="text-[#c9173d] font-bold text-[18px]">Production Companies</h4>
        <>
          {getCompanies}
        </>
      </div>

      {
        isMovie ? (
          <div>
            <h4 className="text-[#c9173d] font-bold text-[18px]">Crews</h4>
            <div className="grid gap-2">
              <>
                {getCrew}
              </>
            </div>
          </div>
        ) : (
          <div>
            <h4 className="text-[#c9173d] font-bold text-[18px]">Total Episodes</h4>
            {`${number_of_episodes} episodes`}
          </div>
        )
      }
    </div>
  )
}

export default Sidebar