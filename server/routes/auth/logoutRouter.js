const router = require('express').Router();

router.route('/')
  .get(async (req, res) => {
    try {
      req.session.destroy();
      res.clearCookie('wannalaunch');
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  });
module.exports = router;
