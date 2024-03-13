import { Banner, LeadCast, RecommendMovies, Sidebar } from '@/components';
import { fetchRecommendMovies, getMovieData } from '@/services/api';

const Movies = async ({ params }: { params: { id: string } }) => {

  const movieList = await getMovieData(params.id, 'movie')
  const recommendData = await fetchRecommendMovies(params.id, 'movie')

  return (
    <>
      <Banner
        contentData={movieList}
        mediaType="movies"
      />
      <div className="w-[100%] m-auto p-[1.5em] grid grid-cols-1 grid-customRow3 gap-[1.5em] lg:grid-cols-4 lg:grid-rows-2 lg:p-[3em] xl:w-[1200px]">
        <div className="lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2 lg:h-auto">
          <LeadCast
            castData={movieList}
          />
        </div>
        <div className="lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3">
          <Sidebar
            isMovie={true}
            contentData={movieList}
          />
        </div>
        <div className="lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-4">
          <RecommendMovies
            contentData={recommendData}
            mediaType="movie"
          />
        </div>
      </div>
    </>

  )
}

// Head tag
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {

  const movieList = await getMovieData(params.id, 'movie')

  return {
    title: `${movieList?.title} - Movie Information`,
    description: `${movieList?.overview}`
  };
}

export default Movies