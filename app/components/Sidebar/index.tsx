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
    <p className="text-[14px] md:text-[16px]" key={company.id}>
      {company.name}
    </p>
  ))
  
  const getCrew = slicedCrew?.map((crew) => (
    <div key={crew.credit_id}>
      <p className="text-[14px] md:text-[16px] leading-5">{crew.name}</p>
      <p className="text-[11px] md:text-[13px] italic">{crew.job}</p>
    </div>
  ))


  return (
    <div className="grid gap-3 py-5 md:py-0 font-satoshi">
      {
        isMovie ? (
          <>
            <div>
              <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
                Budget
              </h4>
              <p className="text-[14px] md:text-[16px]">
                {`$ ${budget !== "" ? budget?.toLocaleString() : '-'}`}
              </p>
            </div>
            <div>
              <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
                Revenue
              </h4>
              <p className="text-[14px] md:text-[16px]">
                {`$ ${revenue !== "" ? revenue?.toLocaleString(): '-'}`}
              </p>
            </div>
          </>
        ) : (
          <div>
            <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
              Original Name
            </h4>
            <p className="text-[14px] md:text-[16px]">
              {original_name}
            </p>
          </div>
        )
      }

      <div>
        <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
          Status
        </h4>
        <p className="text-[14px] md:text-[16px]">
          {status}
        </p>
      </div>
      <div>
        <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
          Production Companies
        </h4>
        <>
          { slicedProductionCompany.length > 0 && getCompanies }
          { slicedProductionCompany.length === 0 && (<p> - </p>) }
        </>
      </div>

      {
        isMovie ? (
          <div>
            <h4 className="text-[#e11d48] font-bold text-[16px] md:text-[18px]">
              Crews
            </h4>
            <div className="grid gap-2">
              <>
                { slicedCrew.length > 0 && getCrew }
                { slicedCrew.length === 0 && (<p> - </p>) }
              </>
            </div>
          </div>
        ) : (
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