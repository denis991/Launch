import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputLang from '../UI/InputLang/InputLang';
import InputLevel from '../UI/InputLevel/InputLevel';

function Cvs() {
  const [langProg, setLangProg] = useState('');
  const [levelVacancies, setLevelVacancies] = useState('');
  const dispatch = useDispatch();
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
      <h1 className="h2 mb-5">Резюме программистов</h1>
      <div>
        <InputLevel levelVacancies={levelVacancies} setLevelVacancies={setLevelVacancies} />
        <InputLang langProg={langProg} setLangProg={setLangProg} />
        {/* кнопки требую путь redux метод */}
        {/* <button onClick={() => dispatch(allCvs({ ...adVacancies }))}>Все</button>
        <button onClick={() => dispatch(popularCvs({ ...adVacancies }))}>Популярные</button>
        <button onClick={() => dispatch(newCvs({ ...adVacancies }))}>Новые</button>
        <button onClick={() => dispatch(noRecommendationCvs({ ...adVacancies }))}>
          Без рекомендации</button> */}
      </div>
      <div>
        {/* kard */}
        { adVacancies.map((el) => (
          <div key={Date.now() + Math.random()}>
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
      </div>
    </>
  );
}

export default Cvs;
