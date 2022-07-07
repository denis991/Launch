import React from 'react';
import classes from './InputLang.module.css';

function InputLang({ langProg, setLangProg }) {
  return (
    <div className={classes.viewport}>
      <select value={langProg} onChange={(e) => setLangProg(e.target.value)} id="cities">

        <option value="AspectC++">AspectC++</option>
        <option value="AspectJ">AspectJ</option>
        <option value="Basic">Basic</option>
        <option value="Pascal">Pascal</option>
        <option value="Shell">Shell</option>
        <option value="PHP">PHP</option>
        <option value="Limbo">Limbo</option>
        <option value="C++">C++</option>
        <option value="C#">C#</option>
        <option value="Object Pascal">Object Pascal</option>
        <option value="Dylan">Dylan</option>
        <option value="Haxe">Haxe</option>
        <option value="Io">Io</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="MC#">MC#</option>
        <option value="Object Pascal">Object Pascal</option>
        <option value="Objective-C">Objective-C</option>
        <option value="Perl">Perl</option>
        <option value="Python">Python</option>
        <option value="Ruby">Ruby</option>
        <option value="Self">Self</option>
        <option value="Simula">Simula</option>
        <option value="Smalltalk">Smalltalk</option>
        <option value="Swift">Swift</option>
        <option value="Clean">Clean</option>
        <option value="Elm">Elm</option>
        <option value="Erlang">Erlang</option>
        <option value="F#">F#</option>
        <option value="Mathematica">Mathematica</option>
        <option value="Scheme">Scheme</option>
      </select>
    </div>
  );
}

export default InputLang;
