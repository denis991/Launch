import React, { useState } from 'react';
import InputLang from '../UI/InputLang/InputLang';
import InputLevel from '../UI/InputLevel/InputLevel';

function Vacancies() {
  const [langProg, setLangProg] = useState('');
  const [levelVacancies, setLevelVacancies] = useState('');

  return (
    <>
      <h1>
        Вакансии для разработчиков
      </h1>
      <div>
        <InputLevel levelVacancies={levelVacancies} setLevelVacancies={setLevelVacancies} />
        <InputLang langProg={langProg} setLangProg={setLangProg} />
        <input placeholder="Город" type="text" name="web_vacancies_search_form[city]" id="web_vacancies_search_form_city" />
        <input type="submit" name="commit" value="Найти" data-disable-with="Найти" />
      </div>

    </>
  );
}

export default Vacancies;
