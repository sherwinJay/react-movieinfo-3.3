import { ImageProps, StaticImageData } from "next/image"
import { Dispatch, Ref, SetStateAction } from "react"

export type HomeCardData = {
  title: string
  name: string
  id: string | number
  overview: string
  vote_average: number
  backdrop_path: string
  poster_path: string
  release_date: string
  runtime?: string | number
}

export type HomeCardSection = {
  isMovie?: boolean
  template?: "1" | "2"
  title: "Upcoming Movies" | "Now Playing" | "TV Shows" | "Trending Movies"
  categoryData: HomeCardData[]
  imgCount?: number
  name?: string
}

export type HomeCardProps = HomeCardData & {
  isMovie?: boolean
  template?: string
}

export type CrewProps = {
  slice(arg0: number, arg1: number): CrewProps
  map(arg0: (crew: CrewProps) => JSX.Element | ""): unknown
  credit_id: string | number
  name: string
  job: string
  length: number
}

export type CreatorsProps = {
  map(arg0: (creator: CreatorsProps) => JSX.Element): unknown
  length: number
  credit_id: string | number
  name: string
  job: string
}

export type CrewData = {
  credits: {
    crew: CrewProps
  }
  created_by: CreatorsProps
  mediaType: "movie" | "tv"
}

export type ResultsProps = {
  key: string
  length: number
}

export type BannerContentData = HomeCardData & {
  length?: number
  tagline?: string
  popularity?: string | number
  episode_run_time?: number[]
  genres: {
    name: string
    map(arg0: (genre: { name: string }) => string): string
  }
  credits: {
    crew: CrewProps
  }
  created_by: CreatorsProps
  videos: {
    results: ResultsProps[]
  }
  releaseDate: string | null
  first_air_date: string | null
}

export type PointerFunction = {
  target: {
    id: string
  }
}

export type ContentData = {
  id: string
  title: string
  backdrop_path: string
  [key: number]: { backdrop_path: string }
  length: number
  name: string
}

export type RecommendData = {
  id: string
  title: string
  name: string
  backdrop_path: string
  [key: number]: { backdrop_path: string }
  length: number
}

export type ProductionCompanyData = {
  // map(arg0: (company: ProductionCompanyData) => JSX.Element): unknown
  // slice(arg0: number, arg1: number): ProductionCompanyData
  name: string
  id: string
  length: number
}

export type SidebarData = {
  // map(arg0: (production_companies: any) => JSX.Element | undefined): unknown
  budget: number | string
  revenue: number | string
  status: string
  original_name: string
  number_of_episodes: number
  production_companies: ProductionCompanyData[]
  credits: {
    crew: CrewProps
  }
}

export type SearchData = {
  media_type: string
  title: string
  name: string
  id: string
}

export type LqipExampleProps = {
  image: Pick<ImageProps, "src" | "width" | "height" | "blurDataURL">
}

export type ImageProps2 = {
  src: string | StaticImageData
  className?: string | undefined
  fill?: boolean
  alt: string
  width?: number
  height?: number
  onPointerEnter?: React.PointerEventHandler<HTMLImageElement> | undefined
  id?: string
  sizes?: string
  placeholder?: "blur" | "empty" | undefined
  blurDataURL?: string
  quality?: number
  imageRef?: Ref<HTMLImageElement | null> | undefined
}

export type SearchbarProps = {
  setIsOpen: React.Dispatch<SetStateAction<boolean>>
}

export type CastImageProps = {
  profilePath: string | null
  name: string
}

export type SliderProps = {
  movieData: HomeCardData[]
}

export type BannerIconsProps = {
  mediaType?: string
  runtime: string | number | undefined
  episodeTime: any
  videos: {
    results: ResultsProps[]
  }
  votes: number
}

export type BannerProps = {
  contentData: BannerContentData
  mediaType: "movie" | "tv"
}

export type ISearchVal = {
  searchVal: string
  setSearchVal: Dispatch<SetStateAction<string>>
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export type ProductionCompanyProps = {
  productionCompanies: ProductionCompanyData[]
}

export interface ActorTypes {
  biography?: string
  birthday: string
  gender: number
  name: string
  profile_path: string
  id: number
  place_of_birth?: string
  also_known_as: string[]
  deathday: string | null
}

export interface ActorCombinedCreditsTypes {
  cast: any
  title: string
  name: string
  popularity: number
  character: string
  media_type: "movie" | "tv"
  poster_path: string | null
  job: string
  release_date: string
  first_air_date: string
  id: number
  credit_id: string
  episode_count: number
}

export interface ActorInformationTypes {
  actorData: ActorTypes
  actorCredits: ActorCombinedCreditsTypes
  actorSocialMediaAccounts: SocialMediaAccountsTypes
}

export type SocialMediaAccountsTypes = {
  facebook_id: string | null
  twitter_id: string | null
  instagram_id: string | null
  youtube_id: string | null
}

export type PersonalInformationProps = {
  birthday: string | null
  birthPlace: string
  otherNames: string[]
  dayOfDeath: string | null
}

export type CastProps = {
  // slice(arg0: number, arg1: number): LeadCastData
  profile_path: string | null
  name: string
  credit_id: string
  character: string
  length: number
  id: string
}

export type LeadCastData = HomeCardData & {
  // map(arg0: (cast: CastProps) => JSX.Element | undefined): unknown
  credits: {
    cast: CastProps[]
    length: number
  }
}

export type CastData = {
  castData: LeadCastData
}

export type NoImageProps = {
  className: string | undefined
  width: number | undefined
  height: number | undefined
}

export type TrailersProps = {
  popularity: number
  name: string
  title: string
  backdrop_path: string
  media_type: "movie" | "tv"
  id: string
}

export type TrailerThumbnailProps = {
  name: string
  title: string
  backdrop_path: string
  media_type: "movie" | "tv"
  id: string
  pointerEvent(data: string | null | undefined): void
}

export type TrailerType = {
  key: string
  type: string
}
