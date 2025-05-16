import { Inter } from '@next/font/google'
import { HomeSection, Slider } from '@/components';
import { getAllMoviesData } from '@/services/api';
import Trailers from '@/components/Trailers/Trailers';
// export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const { upcomingMovie, nowPlayingMovie, popularTV } = await getAllMoviesData()

  // console.log(trending)

  return (
    <main>
      <Slider // movieData={popularMovie}
      />
      <div className="w-[100vw] p-[1.5em] mx-auto flex flex-col gap-3 lg:py-[3em] lg:px-2 xl:w-[1200px]">

        <HomeSection
          title={'Now Playing'}
          isMovie={true}
          template={'2'}
          imgCount={7}
          categoryData={nowPlayingMovie}
        />
        <HomeSection
          title={'Trending Movies'}
          isMovie={true}
          template={'1'}
          imgCount={8}
          categoryData={upcomingMovie} // trending movies
        />
      </div>

      <Trailers />

      <div className="w-[100vw] p-[1.5em] mx-auto flex flex-col gap-3 lg:py-[3em] lg:px-2 xl:w-[1200px]">
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
