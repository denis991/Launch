const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();

const app = express();

app.use(cors());
const PORT = process.env.DB_PORT;

const mainPageRouter = require('./routes/mainPage');
const usersRouter = require('./routes/users');
const cvsRouter = require('./routes/CVs');
const accountRouter = require('./routes/account');
const notificationsRouter = require('./routes/notifications');
const authRouter = require('./routes/auth/authRouter');
const signupRouter = require('./routes/auth/signupRouter');
const signinRouter = require('./routes/auth/signinRouter');
const logoutRouter = require('./routes/auth/logoutRouter');
const skillsRouter = require('./routes/skills');
const cvCommentsRouter = require('./routes/commentsCV');

const sessionConfig = {
  name: 'wannalaunch',
  store: new FileStore(),
  secret: 'thisissecured',
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', mainPageRouter);
app.use('/auth', authRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/logout', logoutRouter);
app.use('/users', usersRouter);
app.use('/cvs', cvsRouter);
app.use('/account', accountRouter);
app.use('/notifications', notificationsRouter);
app.use('/skills', skillsRouter);
app.use('/comments', cvCommentsRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
