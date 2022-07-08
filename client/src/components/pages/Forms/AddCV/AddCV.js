import React from 'react';

function AddCv() {
  const displayFlex = {
    display: 'flex',
  };

  return (
    <div style={{ paddingTop: '90px' }}>
      <form onSubmit="">
        <div style={displayFlex}>
          <p>Название</p>
          <input type="text" name="title" />
        </div>

        <div style={displayFlex}>
          <input type="checkbox" id="scales" name="elbrus" checked />
          <label htmlFor="scales">Elbrus</label>
        </div>

        <div style={displayFlex}>
          <p>Github</p>
          <input type="text" name="github" />
        </div>

        <div style={displayFlex}>
          <p>Контакт</p>
          <input type="text" name="contact" />
        </div>

        <div style={displayFlex}>
          <p>Описание, навыки</p>
          <input type="textarea" name="body" />
        </div>

        <div style={displayFlex}>
          <p>Награды, Сертификаты</p>
          <input type="textarea" name="awards" />
        </div>

        <div style={displayFlex}>
          <p>Ваше образование</p>
          <input type="textarea" name="education" />
        </div>

        <div style={displayFlex}>
          <p>Ваш опыт</p>
          <input type="textarea" name="experience" />
        </div>

        <button type="submit">Опубликовать резюме</button>
      </form>
    </div>
  );
}

export default AddCv;
