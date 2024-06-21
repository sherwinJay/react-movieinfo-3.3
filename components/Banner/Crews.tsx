import { CrewData, CrewProps } from '@/types'
import React from 'react'

const Crews = ({ credits, created_by, mediaType }: CrewData) => {

  const getCrew = credits.crew.map((crew: CrewProps) => {
    if (crew?.job === "Director" || crew?.job === "Screenplay") {
      return (
        <li key={crew?.credit_id}>
          <p className="font-bold leading-4 md:leading-5 text-[12px] md:text-[15px]">{crew?.name}</p>
          <p className="text-[11px] md:text-[13px]">{crew?.job}</p>
        </li>
      )
    }
    return <></>
  });

  const getCreator = created_by?.length > 0 ? created_by?.map((creator) => {
    return (
      <li key={creator.credit_id}>
        <p className="font-bold leading-4 md:leading-5 text-[12px] md:text-[15px]">{creator.name}</p>
        <p className='text-[10px] md:text-[13px]'>Creator</p>
      </li>
    )
  }) : null;

  return (
    <>
      {mediaType === "movies" ? getCrew : getCreator}
    </>

  )
}

export default Crews