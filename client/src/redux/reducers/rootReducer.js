import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import cvsReducer from './cvsReducer';
import skillsReducer from './skillReducer';
import userVacancyReducer from './userVacancyReducer';
import authReducer from './authReducer';
import cvCommentReducer from './cvCommentReducer';
import usersReducer from './usersReducer';
import userReducer from './userReducer';
import cvUserReducer from './cvUserReducer';
import vacanciesReducer from './vacanciesReducer';
import accountReducer from './accountReducer';
// import newsReducer from './newsReduser';

const rootReducer = combineReducers({
  user: authReducer,
  users: usersReducer,
  statsUser: userReducer,
  userCV: cvUserReducer,
  loader: loaderReducer,
  skills: skillsReducer,
  cvs: cvsReducer,
  cvComments: cvCommentReducer,
  // news: newsReducer,
  vacancy: userVacancyReducer,
  vacancies: vacanciesReducer,
  accountInfoUser: accountReducer,
  // news: newsReducer,
});

export default rootReducer;
