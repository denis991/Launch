import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import InputLang from '../InputLang/InputLang';
import InputLevel from '../InputLevel/InputLevel';

// import './VacanciesForm.css';

function VacanciesForm({
  levelVacancies, setLevelVacancies, langProg, setLangProg, adVacancies
}) {
  return (
    <form className="simple_form row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2 g-lg-3" id="new_web_vacancies_search_form" action="/vacancy_filters/search.html" acceptCharset="UTF-8" method="get">
      <div className="d-flex flex-column justify-content-start select optional web_vacancies_search_form_level">
        <div className="input-group" />
      </div>
      <div className="d-flex flex-column justify-content-start string optional web_vacancies_search_form_city">
        <div className="input-group">
          <input className="form-control string optional" placeholder="Город" type="text" name="web_vacancies_search_form[city]" id="web_vacancies_search_form_city" />
        </div>
      </div>
      <div className="input">
        <InputLevel levelVacancies={levelVacancies} setLevelVacancies={setLevelVacancies} />
        <InputLang langProg={langProg} setLangProg={setLangProg} />

        <Button type="submit" name="commit" value="Найти" className="btn btn-primary me-2 flex-grow-1" data-disable-with="Найти" />
        <div className="col d-flex">

          <Link to="/vacancies" className="btn btn-outline-secondary">
            <Button>сбросить</Button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default VacanciesForm;
