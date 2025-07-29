import { MainFooter, MainHeader, TanstackProvider } from '@/components'
import '@/styles/globals.css'
import '@/styles/reset.css'

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
      {/* <head /> */}
      <body className="grid grid-rows-customRow1 h-[100vh] bg-neutral-900">
        <TanstackProvider>
          <MainHeader />
          {children}
          <MainFooter />
        </TanstackProvider>
      </body>
    </html>
  )
}
