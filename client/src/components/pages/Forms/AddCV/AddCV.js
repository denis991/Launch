import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCVThunk } from '../../../../redux/actions/cvsActions';

function AddCv() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({});
  console.log(form);

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(addCVThunk(form));
  };

  return (
    <div style={{ paddingTop: '90px', margin: '60px' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Название</p>
          <input onChange={handleInput} value={form.name} type="text" name="title" />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={(e) => {
                handleChange();
                handleInput(e);
              }}
              value={form.name}
              name="elbrus"
            />
            Elbrus
          </label>
        </div>

        <div>
          <p>Github</p>
          <input onChange={handleInput} value={form.name} type="text" name="github" />
        </div>

        <div>
          <p>Контакт</p>
          <input onChange={handleInput} value={form.name} type="text" name="contact" />
        </div>

        <div>
          <p>Описание, навыки</p>
          <input onChange={handleInput} value={form.name} type="textarea" name="body" />
        </div>

        <div>
          <p>Награды, Сертификаты</p>
          <input onChange={handleInput} value={form.name} type="textarea" name="awards" />
        </div>

        <div>
          <p>Ваше образование</p>
          <input onChange={handleInput} value={form.name} type="textarea" name="education" />
        </div>

        <div>
          <p>Ваш опыт</p>
          <input onChange={handleInput} value={form.name} type="textarea" name="experience" />
        </div>

        <button type="submit">Опубликовать резюме</button>
      </form>
    </div>
  );
}

export default AddCv;
