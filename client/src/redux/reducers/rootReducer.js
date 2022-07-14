import {combineReducers} from 'redux';
import loaderReducer from './loaderReducer';
import cvsReducer from './cvsReducer';
import skillsReducer from './skillReducer';
import vacancyReducer from './vacancyReducer';
import authReducer from './authReducer';
import cvCommentReducer from './cvCommentReducer';
import usersReducer from './usersReducer';
import userReducer from './userReducer';
import chatReducer from "./chatReducer";

const rootReducer = combineReducers({
    user: authReducer,
    loader: loaderReducer,
    cvs: cvsReducer,
    skills: skillsReducer,
    vacancy: vacancyReducer,
    cvComments: cvCommentReducer,
    users: usersReducer,
    statsUser: userReducer,
    chat: chatReducer
});

export default rootReducer;
