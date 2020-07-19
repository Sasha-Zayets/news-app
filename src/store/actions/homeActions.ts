import axios from '../../utils/axios';
import { Action } from 'redux';
import { newsType, SetPopularNewsAction } from "../types/home";
import { SET_POPULAR_NEWS } from "../types/home";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../reducers";

export const setPopularNews = (
  payload: Array<newsType>
): SetPopularNewsAction => ({
  type: SET_POPULAR_NEWS,
  payload
});

export const getPopularNews = () => async (
  dispatch: ThunkDispatch<RootState, void, Action>
) => {
  try {
    const { data } = await axios.get('top-headlines?country=us');
    const popularNews = data.articles.splice(0, 10);

    dispatch(setPopularNews(popularNews));
  } catch(error) {
    console.log(error);
  }
}
