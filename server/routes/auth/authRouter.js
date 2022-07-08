const router = require('express').Router();
const { Users } = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    try {
      const result = await Users.findByPk(req.session.userId);
      res.json(result);
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  });

module.exports = router;
