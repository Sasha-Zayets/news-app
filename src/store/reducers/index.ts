import { combineReducers } from 'redux';
import homeDataReducer from './home';

export const rootReducer = combineReducers({
  home: homeDataReducer,
});
