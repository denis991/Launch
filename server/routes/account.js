const router = require('express').Router();
const { CVS } = require('../db/models');

// новое резюме
router.post('/cvs/new', async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

module.exports = router;
