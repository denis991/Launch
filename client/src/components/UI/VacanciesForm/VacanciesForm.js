import React, { useState } from 'react';
import InputLang from '../InputLang/InputLang';
import InputLevel from '../InputLevel/InputLevel';

import './VacanciesForm.css';

function VacanciesForm({
  levelVacancies, setLevelVacancies, langProg, setLangProg, adVacancies
}) {
  return (
    <div className="form">
      <h3>
        Вакансии для разработчиков
      </h3>
      <div className="city">
        <input style={{ width: '100%', color: 'white' }} type="text" placeholder="Город" name="city" />
        <input className="btn" type="submit" value="Найти" data-disable-with="Найти" />
      </div>
      <div className="input">
        <InputLevel levelVacancies={levelVacancies} setLevelVacancies={setLevelVacancies} />
        <InputLang langProg={langProg} setLangProg={setLangProg} />
      </div>

    </div>
  );
}

export default VacanciesForm;
