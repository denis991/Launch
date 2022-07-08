import React from 'react';

function InputLevel({ levelVacancies, setLevelVacancies }) {
  return (
    <select value={levelVacancies} onChange={(e) => setLevelVacancies(e.target.value)} name="web_vacancies_search_form[level]" id="web_vacancies_search_form_level">

      <option value="intern">Стажёр</option>
      <option value="junior">Джуниор</option>
      <option value="middle">Мидл</option>
      <option value="senior">Синьор</option>
    </select>
  );
}

export default InputLevel;
