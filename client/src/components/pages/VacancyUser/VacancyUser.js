import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserVacancyThunk } from '../../../redux/actions/userVacancyActions';

function VacancyUser() {
  const dispatch = useDispatch();
  const parseUrl = window.location.href.split('/');
  const id = parseUrl[parseUrl.length - 1];

  const vacancy = useSelector((state) => state.vacancy);

  useEffect(() => {
    dispatch(getUserVacancyThunk(id));
  }, []);

  return (
    <div className="container my-4">
      <div>
        <h2>{vacancy?.title}</h2>
        <hr />
      </div>

      <div>
        <h4>Название компании</h4>
        <p>{vacancy?.company}</p>
      </div>

      <div>
        <h4>О компании</h4>
        <p>{vacancy?.about_company}</p>
      </div>

      <div>
        <h4>О проекте</h4>
        <p>{vacancy?.about_project}</p>
      </div>

      <div>
        <h4>Уровень</h4>
        <p>{vacancy?.level}</p>
      </div>

      <div>
        <h4>Зарплата</h4>
        <p>{vacancy?.salary}</p>
      </div>

      <div>
        <h4>Город</h4>
        <p>{vacancy?.city}</p>
      </div>

      <div>
        <h4>Условия работы</h4>
        <p>{vacancy?.conditions}</p>
      </div>

      <div>
        <h4>Контакты</h4>
        <p>
          Имя:
          {' '}
          {vacancy?.contact_name}
        </p>
        <p>
          tel:
          {' '}
          {vacancy?.contact_phone}
        </p>
        <p>
          social:
          {' '}
          {vacancy?.contact_social}
        </p>
      </div>

      <div>
        <h4>Обязанности</h4>
        <p>{vacancy?.duties}</p>
      </div>

      <div>
        <h4>Опыт</h4>
        <p>{vacancy?.experience}</p>
      </div>

      <div>
        <h4>Требования</h4>
        <p>{vacancy?.requirements}</p>
      </div>

      <div>
        <h4>Технологии</h4>
        <p>{vacancy?.technology}</p>
      </div>

      <div>
        <h4>График</h4>
        <p>{vacancy?.schedule}</p>
      </div>

      <button type="button" className="btn btn-primary">Откликнуться</button>
    </div>
  );
}

export default VacancyUser;
