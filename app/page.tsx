import { Inter } from '@next/font/google'
import { HomeSection, Slider } from '@/components';
import { getMoviesData } from '@/services/queries';
export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const { popularMovie, upcomingMovie, nowPlayingMovie, popularTV } = await getMoviesData()

  return (
    <>
      <Slider
        movieData={popularMovie}
      />
      <main className="w-[100%] p-[1.5em] mx-auto flex flex-col gap-3 lg:p-[3em] xl:w-[1200px]">
        <HomeSection
          title={'Upcoming Movies'}
          isMovie={true}
          template={'1'}
          imgCount={8}
          categoryData={upcomingMovie}
        />

        <HomeSection
          title={'Now Playing'}
          isMovie={true}
          template={'2'}
          imgCount={7}
          categoryData={nowPlayingMovie}
        />

        <HomeSection
          title={'TV Shows'}
          isMovie={false}
          template={'1'}
          imgCount={8}
          categoryData={popularTV}
        />
      </main>
    </>
  )
}
