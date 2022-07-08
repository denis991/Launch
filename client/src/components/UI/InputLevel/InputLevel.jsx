import React from 'react';
import './inputLevel.css';

function InputLevel({ levelVacancies, setLevelVacancies }) {
  return (
    <label htmlFor="inputLevel" className="xz">
      <select className="select" id="inputLevel" value={levelVacancies} onChange={(e) => setLevelVacancies(e.target.value)} name="we">
        <option value="intern">Стажёр</option>
        <option value="junior">Джуниор</option>
        <option value="middle">Мидл</option>
        <option value="senior">Синьор</option>
      </select>
    </label>
  );
}

export default InputLevel;
