import React from 'react';
import './VacanciesList.css';

function VacanciesList({ adVacancies }) {
  return (
    <div>
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

export default VacanciesList;
