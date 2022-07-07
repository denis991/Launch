import React, { useState } from 'react';
import InputLang from '../UI/InputLang/InputLang';
import InputLevel from '../UI/InputLevel/InputLevel';

function Vacancies() {
  const [langProg, setLangProg] = useState('');
  const [levelVacancies, setLevelVacancies] = useState('');
  const [adVacancies, setAdVacancies] = useState([{
    url: '/vacancies/576',
    level: 'Джуниор',
    leng: 'Ruby-разработчик',
    salary: 'от 40 000 до 60 000 ₽ (На руки)',
    company: ' Edstein',
    body: 'Написание кода в соответствии с поставленными задачами Написание тестов Участие в отладке внутренних процессов разработки (code review, code style, git flow,deployment flow)',
    dialect: 'PostgreSQL, ООП',
  }]);

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
      {/* kard */}
      { adVacancies.map((el) => (

        <div>
          <div className="card mb-3 border-0">
            <div className="card-body">
              <div className="small text-muted">около 5 часов</div>
              <h5 className="card-title">
                <a href={el.url}>
                  <span className="me-2">{el.level}</span>
                  <span className="me-2">{el.leng}</span>
                  <span className="small me-2">{el.salary}</span>
                  <span className="me-2">
                    <span className="me-2">-</span>
                    {el.company}
                    {' '}
                  </span>
                </a>
              </h5>
              <div className="card-text mb-2">
                {el.body}

                <div className="fw-bold mt-1">{el.dialect}</div>
              </div>
            </div>

          </div>
        </div>
      ))}

    </>
  );
}

export default Vacancies;
