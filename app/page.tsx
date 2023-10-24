import { Inter } from '@next/font/google'
import { movieDbURL } from '@/constant'
import { HomeCardData } from '@/types';
import { HomeSection, Slider } from '@/components';
import { fetchHomePageMovies } from '@/utils/fetchHomePageMovies';

const inter = Inter({ subsets: ['latin'] })

// type MovieDataType = {
//   results: HomeCardData[]
// }

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

async function getMoviesData(){

  // const movieHostName = `https://api.themoviedb.org/3`;

  console.log('TEST Start')
   
  const [ 
    popularMovie,
    upcomingMovie,
    nowPlayingMovie,
    popularTV
  ] = await Promise.all<HomeCardData[]>([
    fetchHomePageMovies(`${movieDbURL}/3/movie/popular?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`),
    fetchHomePageMovies(`${movieDbURL}/3/movie/upcoming?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`),
    fetchHomePageMovies(`${movieDbURL}/3/movie/now_playing?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`),
    fetchHomePageMovies(`${movieDbURL}/3/tv/popular?api_key=${process.env.MOVIE_DATABASE_ID}&language=en-US&page=1`),
  ])

  return {
    popularMovie,
    upcomingMovie,
    nowPlayingMovie,
    popularTV
  }

}