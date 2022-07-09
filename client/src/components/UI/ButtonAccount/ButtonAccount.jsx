import React from 'react';
import { useDispatch } from 'react-redux';
import { getVacanciesThunk } from '../../../redux/actions/vacancyActions';

function ButtonAccount() {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="nav nav-pills justify-content-center" role="navigation">
        <li className="nav-item">
          <a className="nav-link px-3 active" data-bs-toggle="tab" href="#resume">Резюме</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#answers" onClick={() => dispatch(getVacanciesThunk())}>Вакинсии </a>
        </li>
        <li className="nav-itemЗ">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#comments">Комментарии</a>
        </li>
        <li className="nav-itemЗ">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#comments">Ответы</a>
        </li>
      </ul>
    </div>
  );
}

export default ButtonAccount;
