'use client'

type ErrorProps = {
  error: Error
  reset: () => void
}

const Error = ({error, reset}: ErrorProps) => {
  return (
    <div className="w-[100%] m-auto px-4 py-4 grid place-content-center gap-5 xl:w-[1200px]">
      <p className="text-center">
        <>
          {error.message || `Something went wrong`}
          {/* {`Something went wrong`} */}
        </>
      </p>
      <button className="bg-[#c9173d] mx-auto w-[100px] py-1.5 rounded-full" onClick={reset}>
        Try again
      </button>
    </div>
  )
}

export default Error