import { Inter } from '@next/font/google'
import { HomeSection, Slider, Trailers } from '@/components';
import { getAllMoviesData } from '@/services/api';
// export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const { upcomingMovie, nowPlayingMovie, popularTV } = await getAllMoviesData()

  // console.log(trending)

  return (
    <main>
      <Slider // movieData={popularMovie}
      />
      <div className="w-[100vw] px-[1em] pt-5 mx-auto flex flex-col gap-3 lg:pt-[3em] lg:pb-0 lg:px-2 xl:w-[1200px]">
        <HomeSection
          title={'In Theatres'}
          isMovie={true}
          template={'2'}
          imgCount={7}
          categoryData={nowPlayingMovie}
        />
        <HomeSection
          title={'Trending Movies'}
          isMovie={true}
          template={'1'}
          imgCount={12}
          categoryData={upcomingMovie} // trending movies
        />
      </div>

      <Trailers />

      <div className="w-[100vw] pt-4 px-[1em] mx-auto flex flex-col lg:pb-0 gap-3 lg:py-[3em] lg:px-2 xl:w-[1200px]">
        <HomeSection
          title={'TV Shows'}
          isMovie={false}
          template={'1'}
          imgCount={12}
          categoryData={popularTV} // trending tv shows
        />


      </div>
      {/* <TestSection
        data={popularTV}
      /> */}
    </main>
  )
}
