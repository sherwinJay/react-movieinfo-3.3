import React from 'react'

type Props = {
  content: string
}

const NoContent = ({content}: Props) => {
  return (
    <div>
      <p>
        { content }
      </p>
    </div>
  )
}

export default NoContent