import { FC } from 'react'

interface pageProps {
  
}

const page = ({params}: {params: {id: string}}) => {
  return <div>{`page ${params.id}`}</div>
}

export default page