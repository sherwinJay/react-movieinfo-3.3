import { FC } from 'react'
import { useRouter } from 'next/router';

interface pageProps {
  
}

const page = ({params}: {params: {id: string}}) => {
  const router = useRouter();
  return <div>{`page ${router.query.id}`}</div>
}

export default page