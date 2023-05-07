import Image from 'next/image'
import React from 'react'
import loadingImg from '../../public/images/loading2.svg'

const Loader = () => {
  return (
    <div className='h-[100%] grid place-content-center'>
      <div className='w-[200px] mt-[-50px]'>
        <Image
          src={loadingImg}
          alt="loading"
          width={280}
          height={130}
        />
        <p className='text-center mt-5'>Loading...</p>
      </div>
    </div>
  )
}

export default Loader