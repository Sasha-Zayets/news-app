import axios from '../../utils/axios';
import { Dispatch } from 'redux';
import { newsType, SetPopularNewsAction } from "../types/home";
import { SET_POPULAR_NEWS } from "../types/home";

export const setPopularNews = (
  payload: Array<newsType>
): SetPopularNewsAction => ({
  type: SET_POPULAR_NEWS,
  payload
});

export const getPopularNews = () => async (dispatch: Dispatch): Promise<void> => {
  try {
    const result = await axios.get('top-headlines?country=us');
    console.log(result);
  } catch(error) {
    console.log(error);
  }
}
