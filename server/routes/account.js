const router = require('express').Router();
const {
  CVS: CVs, Vacancies, CV_Skills, Vacancies_Skills,
} = require('../db/models');

// новое резюме юзера
router.post('/cvs/new', async (req, res) => {
  try {
    // данные с фронта
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

    // создаем резюме в базе
    const newCV = await CVs.create({
      user_id: req.session.userId,
      title,
      elbrus,
      github,
      contact,
      body,
      awards,
      education,
      experience,
    });

    const idCV = newCV.id;
    skillsID.map(async (skillId) => {
      await CV_Skills.create({
        idCV,
        skill_id: skillId,
      });
    });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

// новая вакансия юзера
router.post('/vacancies/new', async (req, res) => {
  try {
    // данные с фронта
    const {
      skillsID,
      title,
      level,
      salary,
      company,
      schedule,
      url,
      contact_name,
      contact_phone,
      contact_social,
      experience,
      about_company,
      about_project,
      duties,
      requirements,
      technology,
      conditions,
      city,
    } = req.body;

    // создаем вакансию в базе
    const newVacancy = await Vacancies.create({
      user_id: req.session.userId,
      title,
      level,
      salary,
      company,
      schedule,
      url,
      contact_name,
      contact_phone,
      contact_social,
      experience,
      about_company,
      about_project,
      duties,
      requirements,
      technology,
      conditions,
      city,
    });

    const idVacancy = newVacancy.id;
    skillsID.map(async (skillId) => {
      await Vacancies_Skills.create({
        idVacancy,
        skill_id: skillId,
      });
    });

    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

// список резюме пользователя
router.get('/cvs', async (req, res) => {
  try {
    const userCVS = await CVs.findAll({
      where: {
        userId: req.session.userId,
      },
    });
    res.json(userCVS);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

// список вакансий пользователя
router.get('/vacancies', async (req, res) => {
  try {
    const userVacancies = await Vacancies.findAll({
      where: {
        userId: req.session.userId,
      },
    });
    res.json(userVacancies);
  } catch (err) {
    console.log(err);
    res.sendStatus(404);
  }
});

router.delete('/cvs', async (req, res) => {
  try {
    const { idCV } = req.body;
    await CVs.destroy({
      where: {
        userId: req.session.userId,
        id: idCV,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete('/vacancies', async (req, res) => {
  try {
    const { idVacancy } = req.body;
    await Vacancies.destroy({
      where: {
        userId: req.session.userId,
        id: idVacancy,
      },
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;