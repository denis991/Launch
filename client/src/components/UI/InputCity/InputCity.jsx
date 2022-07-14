import React from 'react';

function InputCity({ setCity, city }) {
  return (
    <div className="d-flex flex-column justify-content-start string optional web_vacancies_search_form_city">
      <div className="input-group">

        <select className="form-control select optional" name="web_vacancies_search_form[level]" id="web_vacancies_search_form_level" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Город</option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Анапа">Анапа</option>
          <option value="Архангельск">Архангельск</option>
          <option value="Барнаул">Барнаул</option>
          <option value="Брянск">Брянск</option>
          <option value="Белгород">Белгород</option>
          <option value="Владивосток">Владивосток</option>
          <option value="Владикавказ">Владикавказ</option>
          <option value="Гатчина">Гатчина</option>
          <option value="Геленджик">Геленджик</option>
          <option value="Грозный">Грозный</option>
          <option value="Екатеринбург">Екатеринбург</option>
          <option value="Йошкар-Ола">Йошкар-Ола</option>
          <option value="Калининград">Калининград</option>
          <option value="Коломна">Коломна</option>
          <option value="Кострома">Кострома</option>
          <option value="Кызыл">Кызыл</option>
          <option value="Махачкала">Махачкала</option>
          <option value="Мурманск">Мурманск</option>
          <option value="Набережные Челны">Набережные Челны</option>
          <option value="Новосибирск">Новосибирск</option>
          <option value="Омск">Омск</option>
          <option value="Пермь">Пермь</option>
          <option value="Петропавловск-камчатский">Петропавловск-камчатский</option>
          <option value="Симферополь">Симферополь</option>
          <option value="Сочи">Сочи</option>
          <option value="Ставрополь">Ставрополь</option>
          <option value="Томск">Томск</option>
          <option value="Тула">Тула</option>
          <option value="Челябинск">Челябинск</option>
          <option value="Элиста">Элиста</option>
          {/* <option value="senior">Синьор</option> */}
        </select>
      </div>
    </div>
  );
}

export default InputCity;
