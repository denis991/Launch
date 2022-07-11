const router = require('express').Router();
const { CVComms } = require('../db/models');

router.route('/:id').post(async (req, res) => {
  try {
    console.log('!!!!!!!!');
    const { id } = req.params;
    const { body } = req.body;

    await CVComms.create({
      body,
      cv_id: id,
      user_id: req.session.userId,
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
