import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VacanciesForm from '../../UI/VacanciesForm/VacanciesForm';
import VacanciesList from '../../UI/VacanciesList/VacanciesList';
// import './Vacancies.css';

function Vacancies() {
  const [langProg, setLangProg] = useState('');
  const [levelVacancies, setLevelVacancies] = useState('');
  const [search, setSearch] = useState(false);

  return (
    <div className="container my-4">
      <div className="my-2"> </div>
      <main>
        <div className="row">
          <h1 className="col-md-9">
            {search ? (
              <h1 className="h2 mb-5">
                то что вы искали
              </h1>
            ) : (
              <span className="me-2">Вакансии для разработчиков</span>
            )}

            <Link className="bi-telegram" to="/about" />
          </h1>
          <VacanciesForm
            levelVacancies={levelVacancies}
            setLevelVacancies={setLevelVacancies}
            langProg={langProg}
            setLangProg={setLangProg}
          />
          <VacanciesList />
        </div>
      </main>

    </div>
  );
}

export default Vacancies;
