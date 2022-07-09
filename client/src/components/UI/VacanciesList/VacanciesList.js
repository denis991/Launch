import React from 'react';
import './VacanciesList.css';
// url: '/vacancies/576',
//     level: 'Джуниор',
//     leng: 'Ruby-разработчик',
//     salary: 'от 40 000 до 60 000 ₽ (На руки)',
//     company: ' Edstein',
//     body: 'Написание кода в соответствии с ,
//     dialect: 'PostgreSQL, ООП',

function VacanciesList({ adVacancies }) {
  return (
    <div className="card">
      { adVacancies.map((el) => (
        <div className="card_title">
          {el.level}
          <div className="leng_prog">
            {el.leng}
            {el.salary}
            {' '}
            <div className="opisanie">
              {el.body}

            </div>
          </div>
        </div>
      ))}
    </div>

  );
}

export default VacanciesList;
// { adVacancies.map((el) => (
//       <div className="vacation">
//         <div>
//           <div>{}</div>
//           <h5>
//             <a href={el.url}>
//               <span className="sp">{el.level}</span>
//               <span className="sp">{el.leng}</span>
//               <span className="sp">{el.salary}</span>
//               <span>
//                 <span>-</span>
//                 {el.company};
