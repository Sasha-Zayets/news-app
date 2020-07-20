import {HomeStateType, SET_POPULAR_NEWS, SetPopularNewsAction} from '../types/home';

const initialState: HomeStateType = {
  popularNews: [],
  lastNews: [],
  loading: false
}

const homeDataReducer = (
  state = initialState,
  action: SetPopularNewsAction
): HomeStateType => {
  switch(action.type) {
    case SET_POPULAR_NEWS:
     return {
       ...state,
       popularNews: action.payload
     }
  }

  return state;
}

export default homeDataReducer;
