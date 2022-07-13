const router = require('express').Router();
const { Relocation } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const relocation = await Relocation.findAll();
    console.log('==========>', relocation);
    res.json(relocation);
  } catch (err) {
    console.log('ERROR:', err);
    res.sendStatus(404);
  }
});

module.exports = router;
