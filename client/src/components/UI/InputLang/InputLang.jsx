import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSkill, getSkillThunk } from '../../../redux/actions/skillsActions';
// import './InputLang.css';

function InputLang({ langProg, setLangProg }) {
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.skills);

  useEffect(() => {
    // dispatch(getSkill({}));
    dispatch(getSkillThunk());
  }, []);
  return (
    <div className="d-flex flex-column justify-content-start select optional web_vacancies_search_form_direction">
      <div style={{ border: 'solid 2px black' }} className="input-group">

        <select className="form-control select optional" id="web_vacancies_search_form_direction" value={langProg} onChange={(e) => setLangProg(e.target.value)}>
          <option value="">Язык программирования</option>
          {skills && skills.map((skill) => (
            <option key={skill.id} value={skill.skill}>{skill.skill}</option>
          ))}

        </select>

      </div>
    </div>
  );
}

export default InputLang;
