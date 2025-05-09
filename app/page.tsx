import { Inter } from '@next/font/google'
import { HomeSection, Slider } from '@/components';
import { getAllMoviesData } from '@/services/api';
// export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const { upcomingMovie, nowPlayingMovie, popularTV } = await getAllMoviesData()

  return (
    <main>
      <Slider // movieData={popularMovie}
      />
      <div className="w-[100%] p-[1.5em] mx-auto flex flex-col gap-3 lg:p-[3em] xl:w-[1200px]">
        <HomeSection
          title={'Trending Movies'}
          isMovie={true}
          template={'1'}
          imgCount={8}
          categoryData={upcomingMovie} // trending movies
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
          categoryData={popularTV} // trending tv shows
        />
      </div>
    </main>
  )
}
