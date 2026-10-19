export interface RickandmortinListResponse {
  info: InfoEpisode
  results: Episode[]
}

export interface InfoEpisode {
  count: number
  pages: number
  next: string
  prev: any
}

export interface Episode{
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

