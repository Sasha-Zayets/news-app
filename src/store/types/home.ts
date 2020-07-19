export const SET_POPULAR_NEWS = 'SET_POPULAR_NEWS';

export interface newsType {
  title: string | null
  url: string | null
  publishedAt: string | number
  urlToImage?: string | undefined
}

export interface HomeStateType {
  popularNews: Array<newsType>
  lastNews: Array<newsType>
}

export interface SetPopularNewsAction {
  type: typeof SET_POPULAR_NEWS,
  payload: Array<newsType>
}
