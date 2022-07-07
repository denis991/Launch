import React, { useState } from 'react';
import InputLang from '../UI/InputLang/InputLang';

function Vacancies() {
  const [langProg, setLangProg] = useState('js');

  return (
    <>
      <h1>
        Vacancies
      </h1>
      <div>
        <InputLang langProg={langProg} setLangProg={setLangProg} />

      </div>
    </>
  );
}

export default Vacancies;
