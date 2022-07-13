import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';

import cvsReducer from './cvsReducer';
import skillsReducer from './skillReducer';
import vacancyReducer from './vacancyReducer';
import authReducer from './authReducer';
import cvCommentReducer from './cvCommentReducer';
import relocationReducer from './relocationReducer';

const rootReducer = combineReducers({
  user: authReducer,
  loader: loaderReducer,
  cvs: cvsReducer,
  skills: skillsReducer,
  vacancy: vacancyReducer,
  cvComments: cvCommentReducer,
  relocation: relocationReducer,
});

export default rootReducer;
