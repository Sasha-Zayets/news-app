import { HomeStateType, SET_POPULAR_NEWS, HomeActions, SET_LOADING } from '../types/home';

const initialState: HomeStateType = {
  popularNews: [],
  lastNews: [],
  loading: false
}

const homeDataReducer = (
  state = initialState,
  action: HomeActions
): HomeStateType => {
  switch(action.type) {
    case SET_POPULAR_NEWS:
     return {
       ...state,
       popularNews: action.payload
     }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
  }

  return state;
}

export default homeDataReducer;
