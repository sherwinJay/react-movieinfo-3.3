import { CrewProps } from '@/types';
import { FC } from 'react'

interface CrewsProps {
  crews: CrewProps
}

const SidebarCrews: FC<CrewsProps> = ({crews}) => {

  const slicedCrew = crews?.slice(0,4);

  const getCrew = slicedCrew?.map((crew) => (
    <div key={crew.credit_id}>
      <p className="text-[14px] md:text-[16px] leading-5">{crew.name}</p>
      <p className="text-[11px] md:text-[13px] italic">{crew.job}</p>
    </div>
  ))

  return (
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
  )
}

export default SidebarCrews