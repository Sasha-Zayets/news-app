export const SET_POPULAR_NEWS = 'SET_POPULAR_NEWS';

export interface NewsType {
  title: string | null
  url: string | null
  publishedAt: string | number
  urlToImage?: string | undefined
}

export interface HomeStateType {
  popularNews: Array<NewsType>
  lastNews: Array<NewsType>,
  loading: boolean
}

export interface SetPopularNewsAction {
  type: typeof SET_POPULAR_NEWS,
  payload: Array<NewsType>
}
