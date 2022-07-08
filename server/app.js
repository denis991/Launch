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

// const mainPageRouter = require('./routes/main');
// const authRouter = require('./routes/auth');
// const userRouter = require('./routes/user');

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

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
