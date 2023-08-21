
export type HomeCardData = {
  title: string
  name: string
  id: string | number
  overview: string
  vote_average: number
  backdrop_path: string
  poster_path: string
  release_date?: string
  runtime?: string | number
}

export type HomeCardSection = {
  isMovie?: boolean
  template?: string
  title: string
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
  credit_id: string | number,
  name: string,
  job: string,
  length: number
}

export type CastProps = {
  slice(arg0: number, arg1: number): LeadCastData
  profile_path: string | null,
  name: string,
  credit_id: string,
  character: string,
  length: number
}

export type CreatorsProps = {
  map(arg0: (creator: CreatorsProps) => JSX.Element): unknown
  length: number,
  credit_id: string | number,
  name: string,
  job: string
}

export type CrewData = {
  credits: {
    crew: CrewProps
  },
  created_by: CreatorsProps,
  mediaType: string
}

export type ResultsProps = { 
  key: string
  length: number
}

export type BannerContentData = HomeCardData & {
  length?: number
  tagline?: string,
  popularity?: string | number,
  episode_run_time?: number[],
  genres: {
    name: string
    map(arg0: (genre: { name: string; }) => string): string
  },
  credits: {
    crew: CrewProps
  },
  created_by: CreatorsProps,
  videos: {
    results: ResultsProps[]
  },
  releaseDate: string | null,
  first_air_date: string | null
}

export type PointerFunction = {
  target: {
    id: string
  }
}

export type ContentData  = {
  id: string
  title: string
  backdrop_path: string
  [key: number]: {backdrop_path: string}
  length: number
  name: string
}

export type RecommendData = {
  id: string
  title: string
  name: string
  backdrop_path: string
  [key: number]: {backdrop_path: string}
  length: number
}[]

export type LeadCastData = HomeCardData & {
  map(arg0: (cast: CastProps) => JSX.Element | undefined): unknown
  credits: {
    cast: CastProps
    length: number
  },
}

export type ProductionCompanyData = {
  // map(arg0: (company: ProductionCompanyData) => JSX.Element): unknown
  // slice(arg0: number, arg1: number): ProductionCompanyData
  name: string,
  id: string,
  length: number
}

export type SidebarData = {
  // map(arg0: (production_companies: any) => JSX.Element | undefined): unknown
  budget: number | string,
  revenue: number | string,
  status: string,
  original_name: string,
  number_of_episodes: number,
  production_companies: ProductionCompanyData[]
  credits: {
    crew: CrewProps
  }
}