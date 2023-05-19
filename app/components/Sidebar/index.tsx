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
  const slicedCrew = credits?.crew?.slice(0,4);

  const getCompanies = slicedProductionCompany?.map((company) => (
    <p className="text-[14px] md:text-[18px]" key={company.id}>
      {company.name}
    </p>
  ))
  
  const getCrew = slicedCrew?.map((crew) => (
    <div key={crew.credit_id}>
      <p className="text-[14px] md:text-[18px] leading-5">{crew.name}</p>
      <p className="text-[11px] md:text-[13px] italic">{crew.job}</p>
    </div>
  ))


  return (
    <div className="grid gap-3 py-5 md:py-0">
      {
        isMovie ? (
          <>
            <div>
              <h4 className="text-[#c9173d] font-bold text-[16px] md:text-[18px]">Budget</h4>
              <p className="text-[14px] md:text-[18px]">{`$ ${budget !== "" ? budget?.toLocaleString() : '-'}`}</p>
            </div>
            <div>
              <h4 className="text-[#c9173d] font-bold text-[16px] md:text-[18px]">Revenue</h4>
              <p className="text-[14px] md:text-[18px]">{`$ ${revenue !== "" ? revenue?.toLocaleString(): '-'}`}</p>
            </div>
          </>
        ) : (
          <div>
            <h4 className="text-[#c9173d] font-bold text-[16px] md:text-[18px]">Original Name</h4>
            <p className="text-[14px] md:text-[18px]">{original_name}</p>
          </div>
        )
      }

      <div>
        <h4 className="text-[#c9173d] font-bold text-[16px] md:text-[18px]">Status</h4>
        <p className="text-[14px] md:text-[18px]">{status}</p>
      </div>
      <div>
        <h4 className="text-[#c9173d] font-bold text-[16px] md:text-[18px]">Production Companies</h4>
        <>
          {getCompanies}
        </>
      </div>

      {
        isMovie ? (
          <div>
            <h4 className="text-[#c9173d] font-bold text-[16px] md:text-[18px]">Crews</h4>
            <div className="grid gap-2">
              <>
                {getCrew}
              </>
            </div>
          </div>
        ) : (
          <div>
            <h4 className="text-[#c9173d] font-bold text-[16px] md:text-[18px]">Total Episodes</h4>
            {`${number_of_episodes} episodes`}
          </div>
        )
      }
    </div>
  )
}

export default Sidebar