import { MainFooter, MainHeader, TanstackProvider } from '@/components'
import '@/styles/globals.css'
import '@/styles/reset.css'
// import '../styles/globals.css'

export const metadata = {
  title: 'Movie Information',
  description: 'Search movies and tv shows information.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <body className="grid grid-rows-customRow1 h-[100vh]">
        <TanstackProvider>
          <MainHeader />
          {children}
          <MainFooter />
        </TanstackProvider>
      </body>
    </html>
  )
}
