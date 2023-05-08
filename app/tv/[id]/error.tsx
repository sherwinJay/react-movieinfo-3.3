'use client'

import { Button } from "@mui/material"

type ErrorProps = {
  error: Error
  reset: () => void
}

const Error = ({error, reset}: ErrorProps) => {
  return (
    <div className="">
      <p>
        <>
          {error}
        </>
      </p>
      <Button onClick={reset}>
        Try again
      </Button>
    </div>
  )
}

export default Error