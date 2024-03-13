import { HomeCardData, HomeCardSection } from '@/types'
import { Cards, NoContent } from '../index'
import clsx from 'clsx'

const HomeSection = ({ isMovie, categoryData, title, template, imgCount, name }: HomeCardSection): JSX.Element => {

  if (categoryData.length === 0) {
    return (
      <NoContent
        content='No Movies'
      />
    )
  }

  const movieData = categoryData?.slice(0, imgCount)

  return (
    <div>
      <h2 className="mb-2 font-bold text-[1rem] text-[#e11d48] md:text-[1.25rem] font-satoshi inline-block">
        {title}
      </h2>
      <ul className={
        clsx(
          `font-satoshi grid gap-[0.4rem] md:gap-3`,
          template === "1" && `grid-cols-4 min-h-[250px] grid-rows-2  lg:grid-cols-07 lg:min-h-[230px] lg:grid-rows-1`,
          template === "2" && `grid-rows-customRow3a leading-2 grid-cols-4 min-h-[250px]  md:grid-cols-5 md:grid-rows-2 md:min-h-[360px]`
        )
      }
      >
        {movieData.map(thumbnail => (
          <li
            key={thumbnail.id}
            className={
              clsx(
                `rounded-lg overflow-hidden group md:h-[100%] !relative grid items-center`,
                template === "2" && `first:col-start-1 first:col-end-4 first:row-start-1 first:row-end-3 md:first:col-end-3`
              )
            }
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
            />
          </li>
        ))
        }
      </ul>
    </div>
  )
}

export default HomeSection