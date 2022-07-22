const router = require('express').Router();
const { CVComms, Users } = require('../db/models');

router.route('/:id').get(async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await CVComms.findAll({
      where: {
        cv_id: id,
      },
      include: {
        model: Users,
        attributes: ['name'],
      }
    });
    res.json(comments);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

router.route('/:id').post(async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req.body;

    const cvComms = await CVComms.create({
      body,
      cv_id: id,
      user_id: req.session.userId,
    });

    const user = await Users.findOne({
      where: {
        id: req.session.userId,
      }
    });
    const idComms = cvComms.id;
    const { createdAt } = cvComms;
    const { name } = user;
    const user_id = req.session.userId;

    res.json({
      idComms, name, createdAt, user_id
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

module.exports = router;
