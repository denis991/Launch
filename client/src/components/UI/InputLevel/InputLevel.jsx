import React from 'react';
import './inputLevel.css';

function InputLevel({ levelVacancies, setLevelVacancies }) {
  return (
    <label htmlFor="inputLevel" className="xz">
      <select className="form-control select optional" name="web_vacancies_search_form[level]" id="web_vacancies_search_form_level" value={levelVacancies} onChange={(e) => setLevelVacancies(e.target.value)}>
        <option value="intern">Стажёр</option>
        <option value="junior">Джуниор</option>
        <option value="middle">Мидл</option>
        <option value="senior">Синьор</option>
      </select>
    </label>
  );
}

export default InputLevel;
