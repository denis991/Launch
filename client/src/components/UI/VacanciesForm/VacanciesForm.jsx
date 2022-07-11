import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import InputLang from '../InputLang/InputLang';
import InputLevel from '../InputLevel/InputLevel';

// import './VacanciesForm.css';

function VacanciesForm({
  levelVacancies, setLevelVacancies, langProg, setLangProg, adVacancies
}) {
  const [city, setCity] = useState('Город');
  return (
    <div className="p-3 mb-3 bg-light rounded-3">

      <form type="submit" className="simple_form row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-2 g-lg-3" id="new_web_vacancies_search_form" action="/" acceptCharset="UTF-8" method="get">

        <InputLevel levelVacancies={levelVacancies} setLevelVacancies={setLevelVacancies} />
        <div className="d-flex flex-column justify-content-start string optional web_vacancies_search_form_city">
          <div className="input-group">
            <input className="form-control string optional" placeholder={city} type="text" name="web_vacancies_search_form[city]" id="web_vacancies_search_form_city" value={setCity} />
          </div>
        </div>
        <InputLang langProg={langProg} setLangProg={setLangProg} />

        <div className="col d-flex">

          <Button name="commit" className="btn btn-primary me-2 flex-grow-1" data-disable-with="Найти">
            Найти
          </Button>
          <Link class="btn btn-outline-secondary" to="/vacancies">Сбросить</Link>

        </div>
      </form>
    </div>
  );
}

export default VacanciesForm;
