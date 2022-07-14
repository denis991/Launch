const router = require('express').Router();
const { CVs, CVComms } = require('../db/models');

// все резюме
router.get('/', async (req, res) => {
  try {
    const allCVS = await CVs.findAll();
    res.json(allCVS);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

// конкретное резюме с комментариями
router.route('/:id')
  .get(async (req, res) => {
    try {
      const { id } = req.params;
      const cvUser = await CVs.findOne({
        where: {
          id,
        },
      });

      res.json({ cvUser });
    } catch (err) {
      console.log(err);
      res.sendStatus(404);
    }
  })
  .put(async (req, res) => {
    const {
      skillsID,
      title,
      elbrus,
      github,
      contact,
      body,
      awards,
      education,
      experience,
    } = req.body;
    try {
      const cv = await CVs.findOne({
        where: {
          user_id: req.session.userId,
        }
      });
      cv.skillsID = skillsID;
      cv.title = title;
      cv.elbrus = elbrus;
      cv.github = github;
      cv.contact = contact;
      cv.body = body;
      cv.awards = awards;
      cv.education = education;
      cv.experience = experience;
      cv.save();
      return res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

module.exports = router;
