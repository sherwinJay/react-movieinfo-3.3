'use client'

import { FC } from 'react'
import { queryClient } from '@/utils/fetchSearchGames'
import { QueryClientProvider } from '@tanstack/react-query'

interface TanstackProviderProps {
  children: React.ReactNode
}

const TanstackProvider: FC<TanstackProviderProps> = ({children}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default TanstackProvider