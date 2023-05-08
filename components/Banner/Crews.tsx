import { CrewData, CrewProps } from '@/types'
import React from 'react'

const Crews = ({ credits, created_by, mediaType }: CrewData) => {

  const getCrew = credits.crew.map((crew: CrewProps) => {
    if(crew?.job === "Director" || crew?.job === "Screenplay"){
      return (
        <li key={crew?.credit_id}>
          <p className="font-bold leading-5 text-[15px]">{crew?.name}</p>
          <p className="text-[14px]">{crew?.job}</p>
        </li>
      )
    }
    return ""
  });

  const getCreator = created_by?.length > 0 ? created_by?.map((creator) => {
    return (
      <li key={creator.credit_id}>
        <p className="font-bold leading-5 text-[14px]">{creator.name}</p>
        <p>Creator</p>
      </li>
    )
  }) : '';

  return (
    <>
      { mediaType === "movies" ? getCrew : getCreator }
    </>
    
  )
}

export default Crews