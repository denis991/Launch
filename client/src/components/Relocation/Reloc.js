import React, { useEffect, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getRelocationThunk from '../../redux/actions/relocationActions';
import Relocation from '../UI/Relocation/Relocation';
import VacanciesForm from '../UI/VacanciesForm/VacanciesForm';

function Reloc() {
  const [langProg, setLangProg] = useState('');
  const [city, setCity] = useState('');
  const [levelVacancies, setLevelVacancies] = useState('');
  const relocation = useSelector((state) => state.relocation);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRelocationThunk());
  }, [langProg, city, levelVacancies]);

  return (
    <div>
      <VacanciesForm
        levelVacancies={levelVacancies}
        setLevelVacancies={setLevelVacancies}
        langProg={langProg}
        setLangProg={setLangProg}
        city={city}
        setCity={setCity}
      />
      <Relocation city={city} langProg={langProg} levelVacancies={levelVacancies} />
    </div>
  );
}

export default Reloc;
