import React, { useState } from 'react';
import InputLang from '../../UI/InputLang/InputLang';
import InputLevel from '../../UI/InputLevel/InputLevel';
import './Vacancies.css';

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
    <div className="vac">
      <h1>
        Вакансии для разработчиков
      </h1>
      <div>
        <input style={{ width: '30%' }} type="text" placeholder="Город" name="city" />
        <input className="btn" type="submit" value="Найти" data-disable-with="Найти" />
      </div>
      <div className="input">
        <InputLevel levelVacancies={levelVacancies} setLevelVacancies={setLevelVacancies} />
        <InputLang langProg={langProg} setLangProg={setLangProg} />
      </div>
      { adVacancies.map((el) => (

        <div>
          <div className="vacation">
            <div>
              <div>{}</div>
              <h5>
                <a href={el.url}>
                  <span className="sp">{el.level}</span>
                  <span className="sp">{el.leng}</span>
                  <span className="sp">{el.salary}</span>
                  <span>
                    <span>-</span>
                    {el.company}
                    {' '}
                  </span>
                </a>
              </h5>
              <div className="opisanie">
                {el.body}
              </div>
              <div className="bd">
                {el.dialect}
              </div>
            </div>

          </div>
        </div>
      ))}
    </div>

  );
}

export default Vacancies;
