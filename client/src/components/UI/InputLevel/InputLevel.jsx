import React from 'react';
// import './inputLevel.css';

function InputLevel({ levelVacancies, setLevelVacancies }) {
  return (
    <div className="d-flex flex-column justify-content-start select optional web_vacancies_search_form_level">
      <div className="input-group">
        <select className="form-control select optional" name="web_vacancies_search_form[level]" id="web_vacancies_search_form_level" value={levelVacancies} onChange={(e) => setLevelVacancies(e.target.value)}>
          <option value="">Уровень</option>
          <option value="intern">Стажёр</option>
          <option value="junior">Джуниор</option>

          <option value="middle">Мидл</option>
          <option value="senior">Синьор</option>
        </select>

      </div>
    </div>
  );
}

export default InputLevel;
