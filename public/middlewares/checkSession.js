const checkSession = (req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId;
    return next();
  }
  next();
};

module.exports = checkSession;
