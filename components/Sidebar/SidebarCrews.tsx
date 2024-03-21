import { CrewProps } from '@/types';
import { FC, ReactNode } from 'react'

interface CrewsProps {
  crews: CrewProps
}

const SidebarCrews: FC<CrewsProps> = ({ crews }) => {

  const slicedCrew = crews?.slice(0, 4);

  const getCrew = slicedCrew?.map((crew) => (
    <div key={crew.credit_id}>
      <p className="sidebar_text leading-5">{crew.name}</p>
      <p className="text-[11px] md:text-[13px] italic">{crew.job}</p>
    </div>
  )) as ReactNode

  return (
    <div>
      <h4 className="sidebar_title">
        Crews
      </h4>
      <div className="grid gap-2">
        <>
          {slicedCrew.length > 0 ? getCrew : <p> - </p>}
        </>
      </div>
    </div>
  )
}

export default SidebarCrews