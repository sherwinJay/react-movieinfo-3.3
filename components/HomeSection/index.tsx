import { HomeCardData, HomeCardSection } from '@/types'
import { Cards, NoContent } from '../index'
import clsx from 'clsx'
import { categoryIcon } from '@/utils/svgIcons'
import { FC } from 'react'

const HomeSection: FC<HomeCardSection> = ({ isMovie, categoryData, title, template, imgCount, name }) => {

  if (categoryData.length === 0) {
    return (
      <NoContent
        content='No Movies'
      />
    )
  }

  const sortedByDateData = title === 'In Theatres' ? categoryData.sort((a, b) => Date.parse(b.release_date) - Date.parse(a.release_date)) : categoryData
  const movieData = sortedByDateData?.slice(0, imgCount)

  const templateVariant = {
    trending:
      "grid-cols-12 min-h-[140px] grid-rows-1 w-[1000px] pb-7 lg:pb-10 lg:w-[2200px] lg:grid-cols-12 lg:min-h-[280px]",
    featured:
      "grid-rows-customRow3a leading-2 grid-cols-4 min-h-[250px] md:grid-cols-5 md:grid-rows-2 md:min-h-[360px]",
  };

  const featuredCard = {
    trending: null,
    featured: `first:col-start-1 first:col-end-4 first:row-start-1 first:row-end-3 md:first:col-end-3`
  }
  return (
    <div className='px-[5px]'>
      <div className='flex gap-1 items-center mb-2'>
        {/* {categoryIcon(title)} */}
        <h2 className="font-bold text-[1rem] text-[#e11d48] md:text-[1.25rem] inline-block">
          {title}
        </h2>
      </div>
      <div className='scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-transparent'>
        <div className='overflow-x-auto scrollbar-thin scrollbar-thumb-rose-600 scrollbar-track-transparent'>
          <ul className={clsx(
            `font-satoshi grid gap-[0.4rem] md:gap-4 ${templateVariant[template]}`,
          )}>
            {movieData.map(thumbnail => (
              <li
                key={thumbnail.id}
                className={clsx(
                  `rounded-md overflow-hidden group md:h-[100%] !relative grid items-center ${featuredCard[template]}`,

                )}
              >
                <Cards
                  title={isMovie ? thumbnail.title : thumbnail.name}
                  name={thumbnail.name}
                  id={thumbnail.id}
                  overview={thumbnail.overview}
                  vote_average={thumbnail.vote_average}
                  backdrop_path={thumbnail.backdrop_path}
                  poster_path={thumbnail.poster_path}
                  template={template}
                  isMovie={isMovie}
                  release_date={''}
                />
              </li>
            ))
            }
          </ul>
        </div>
      </div>

    </div>
  )
}

export default HomeSection