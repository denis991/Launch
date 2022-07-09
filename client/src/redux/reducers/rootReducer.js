import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import userReducer from './userReducer';
import cvsReducer from './cvsReducer';
import skillsReducer from './skillReducer';
import vacancyReducer from './vacancyReducer';

const rootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  cvs: cvsReducer,
  skills: skillsReducer,
  vacancy: vacancyReducer
});

export default rootReducer;
