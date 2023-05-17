import { Banner, LeadCast, RecommendMovies, Sidebar } from '@/app/components';
import fetchRecommendMovies from '@/app/hooks/fetchRecommendMovies';
import React from 'react'
import { getMovieData } from '@/app/hooks/getMovieData';


const TVShows = async ({params}: {params: {id: string}}) => {

  const tvList = await getMovieData(params.id, 'tv')

  const recommendData = await fetchRecommendMovies(params.id, 'tv')

  return (
    <>
      <Banner
        contentData={tvList}
        mediaType="tv"
      />
      <div className="w-[100%] m-auto p-[1.5em] grid grid-cols-1 grid-customRow3 md:gap-[1.5em] md:grid-cols-4 md:grid-rows-2 md:p-[3em] xl:w-[1200px]">
        <div className="md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-2">
          <LeadCast
            castData={tvList}
          />
        </div>
        <div className="md:col-start-4 md:col-end-5 md:row-start-1 md:row-end-3">
          <Sidebar
            isMovie={false}
            contentData={tvList}
          />
        </div>
        <div className="md:row-start-2 md:row-end-3 md:col-start-1 md:col-end-4">
          <RecommendMovies
            contentData={recommendData}
            mediaType="tv"
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

  const tvList = await getMovieData(params.id, 'tv')

  return {
    title: `${tvList.name} - Movie Information`,
  };
}

export default TVShows