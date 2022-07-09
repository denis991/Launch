import React, { useState } from 'react';
import {
  Form, Input, FormGroup, Label, Button
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addCVThunk } from '../../../../redux/actions/cvsActions';
import './AddCV.css';

function AddCv() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({});

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
    <div className="formAddCV" onSubmit={handleSubmit}>
      <Form>
        <h2>Новое резюме</h2>
        <FormGroup>
          <Label for="title">
            Название
          </Label>
          <Input
            name="title"
            type="text"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <Input
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
          </Label>
        </FormGroup>

        <FormGroup>
          <Label>Github</Label>
          <Input
            onChange={handleInput}
            value={form.name}
            type="text"
            name="github"
          />
        </FormGroup>

        <FormGroup>
          <Label>Контакт</Label>
          <Input
            onChange={handleInput}
            value={form.name}
            type="text"
            name="contact"
          />
        </FormGroup>

        <FormGroup>
          <Label>Описание, навыки</Label>
          <Input
            onChange={handleInput}
            value={form.name}
            type="textarea"
            name="body"
          />
        </FormGroup>

        <FormGroup>
          <Label>Награды, Сертификаты</Label>
          <Input
            onChange={handleInput}
            value={form.name}
            type="textarea"
            name="awards"
          />
        </FormGroup>

        <FormGroup>
          <Label>Ваше образование</Label>
          <Input
            onChange={handleInput}
            value={form.name}
            type="textarea"
            name="education"
          />
        </FormGroup>

        <FormGroup>
          <Label>Ваш опыт</Label>
          <Input
            onChange={handleInput}
            value={form.name}
            type="textarea"
            name="experience"
          />
        </FormGroup>
        <button type="submit" className="btn btn-primary">Опубликовать резюме</button>
      </Form>
    </div>
  );
}

export default AddCv;
