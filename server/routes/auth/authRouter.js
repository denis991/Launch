const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Users } = require('../../db/models');

router.route('/').post(async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { id: req.session.userId },
      raw: true,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(null);
  }
});

module.exports = router;
