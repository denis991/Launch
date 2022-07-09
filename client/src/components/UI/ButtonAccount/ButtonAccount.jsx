import React from 'react';

function ButtonAccount() {
  return (
    <div>
      <ul className="nav nav-pills justify-content-center" role="navigation">
        <li className="nav-item">
          <a className="nav-link px-3 active" data-bs-toggle="tab" href="#resume">Резюме</a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#answers">Ответы</a>
        </li>
        <li className="nav-itemЗ">
          <a className="nav-link px-3" data-bs-toggle="tab" href="#comments">Комментарии</a>
        </li>
      </ul>
    </div>
  );
}

export default ButtonAccount;
