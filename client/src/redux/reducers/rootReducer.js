import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';

import cvsReducer from './cvsReducer';
import skillsReducer from './skillReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  user: authReducer,
  loader: loaderReducer,
  cvs: cvsReducer,
  skills: skillsReducer,
});

export default rootReducer;
