'use client'

type ErrorProps = {
  error: Error
  reset: () => void
}

const Error = ({error, reset}: ErrorProps) => {
  return (
    <div>
      <p>
        <>
          {error.message || `Something went wrong`}
        </>
      </p>
      <button onClick={reset}>
        Try again
      </button>
    </div>
  )
}

export default Error