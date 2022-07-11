import React, { useState } from 'react';
import VacanciesForm from '../../UI/VacanciesForm/VacanciesForm';
import VacanciesList from '../../UI/VacanciesList/VacanciesList';
// import './Vacancies.css';

function Vacancies() {
  const [langProg, setLangProg] = useState('');
  const [levelVacancies, setLevelVacancies] = useState('');

  // const [adVacancies, setAdVacancies] = useState([
  //   {
  //     url: '/vacancies/576',
  //     level: 'Джуниор',
  //     leng: 'Ruby-разработчик',
  //     salary: 'от 40 000 до 60 000 ₽ (На руки)',
  //     company: ' Edstein',
  //     body: 'Написание кода в соответствии с поставленными
  // задачами Написание тестов Участие в отладке внутренних процессов
  // разработки (code review, code style, git flow,deployment flow)',
  //     dialect: 'PostgreSQL, ООП',
  //   },
  // ]);

  return (
    <div className="container my-3">
      <div className=" row">
        <div className="col-md-9">

          <VacanciesForm
            levelVacancies={levelVacancies}
            setLevelVacancies={setLevelVacancies}
            langProg={langProg}
            setLangProg={setLangProg}
          />
          <VacanciesList />
        </div>
      </div>
    </div>
  );
}

export default Vacancies;
