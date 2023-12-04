'use client'

import { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface TanstackProviderProps {
  children: React.ReactNode
}

export const queryClient = new QueryClient()

const TanstackProvider: FC<TanstackProviderProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default TanstackProvider