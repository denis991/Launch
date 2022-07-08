import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
});

export default rootReducer;
