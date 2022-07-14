import { combineReducers } from 'redux';
import loaderReducer from './loaderReducer';
import cvsReducer from './cvsReducer';
import skillsReducer from './skillReducer';
import userVacancyReducer from './userVacancyReducer';
import authReducer from './authReducer';
import cvCommentReducer from './cvCommentReducer';
<<<<<<< HEAD
// import newsReducer from './newsReduser';
import usersReducer from './usersReducer';
import userReducer from './userReducer';
=======
import usersReducer from './usersReducer';
import userReducer from './userReducer';
import cvUserReducer from './cvUserReducer';
import vacanciesReducer from './vacanciesReducer';
import accountReducer from './accountReducer';
// import newsReducer from './newsReduser';
>>>>>>> origin/master

const rootReducer = combineReducers({
  user: authReducer,
  users: usersReducer,
  statsUser: userReducer,
  userCV: cvUserReducer,
  loader: loaderReducer,
  skills: skillsReducer,
  cvs: cvsReducer,
  cvComments: cvCommentReducer,
<<<<<<< HEAD
  // news: newsReducer,
  users: usersReducer,
  statsUser: userReducer,
=======
  vacancy: userVacancyReducer,
  vacancies: vacanciesReducer,
  accountInfoUser: accountReducer,
  // news: newsReducer,
>>>>>>> origin/master
});

export default rootReducer;
