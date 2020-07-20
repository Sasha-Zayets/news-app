import axios from '../../utils/axios';
import { Action } from 'redux';
import { NewsType, SetPopularNewsAction, SetLoadingAction } from "../types/home";
import { SET_POPULAR_NEWS, SET_LOADING } from "../types/home";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../reducers";

export const setPopularNews = (
  payload: Array<NewsType>
): SetPopularNewsAction => ({
  type: SET_POPULAR_NEWS,
  payload
});

export const setLoading = (
  payload: boolean
): SetLoadingAction => ({
  type: SET_LOADING,
  payload
})

export const getPopularNews = () => async (
  dispatch: ThunkDispatch<RootState, void, Action>
) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.get('top-headlines?country=us');
    const popularNews = data.articles.splice(0, 10);

    dispatch(setPopularNews(popularNews));
  } catch(error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false));
  }
}
