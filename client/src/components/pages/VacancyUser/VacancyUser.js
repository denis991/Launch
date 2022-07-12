import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserVacancyThunk } from '../../../redux/actions/vacancyActions';

function VacancyUser() {
  const dispatch = useDispatch();
  const parseUrl = window.location.href.split('/');
  const id = parseUrl[parseUrl.length - 1];

  const vacancy = useSelector((state) => state.vacancy);
  console.log('state ===>', vacancy);

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

      {/* <div> */}
      {/*  <h4>Контакты</h4> */}
      {/*  <p> */}
      {/*    tel: */}
      {/*    {' '} */}
      {/*    {vacancy?.cvUser?.contact} */}
      {/*  </p> */}
      {/*  <p><a href={`${vacancy?.cvUser?.github}`}>github</a></p> */}
      {/* </div> */}

      {/* <div> */}
      {/*  <h4>Достижения</h4> */}
      {/*  <p>{vacancy?.cvUser?.awards}</p> */}
      {/* </div> */}

      {/* <div> */}
      {/*  <h4>Образование</h4> */}
      {/*  <p>{vacancy?.cvUser?.education}</p> */}
      {/* </div> */}

      {/* <div> */}
      {/*  <h4>Мой опыт</h4> */}
      {/*  <p>{vacancy?.cvUser?.experience}</p> */}
      {/* </div> */}
    </div>
  );
}

export default VacancyUser;
