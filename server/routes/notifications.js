const router = require('express').Router();
const { Notifications } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const allNotifications = await Notifications.findAll();
    res.json(allNotifications);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { idNotification } = req.params;
    await Notifications.destroy({
      where: {
        userId: req.session.userId,
        id: idNotification,
      },
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
