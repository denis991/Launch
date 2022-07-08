import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import cvsReducer from './cvsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  cvs: cvsReducer,
});

export default rootReducer;
