import React, { useState } from 'react';
import {
  Form, Input, FormGroup, Label
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addVacancyThunk } from '../../../../redux/actions/userVacancyActions';
import './AddVacancy.css';

function AddVacancy() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({});

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(addVacancyThunk(form));
  };

  return (
    <div className="formAddVacancy" onSubmit={handleSubmit}>
      <h2>Новая вакансия</h2>
      <Form>
        <FormGroup>
          <Label for="title">
            Название вакансии
          </Label>
          <Input
            id="title"
            name="title"
            type="text"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="companyName">
            Название компании
          </Label>
          <Input
            id="companyName"
            name="company"
            type="text"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="level">
            Уровень
          </Label>
          <Input
            id="level"
            name="level"
            type="select"
            onChange={handleInput}
            value={form.name}
          >
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <option value="" hidden />
            <option>
              Стажер
            </option>
            <option>
              Джуниор
            </option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="city">
            Город
          </Label>
          <Input
            id="city"
            name="city"
            type="text"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="salary">
            Зарплата
          </Label>
          <Input
            id="salary"
            name="salary"
            type="text"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="schedule">
            График работы
          </Label>
          <Input
            id="schedule"
            name="schedule"
            type="select"
            onChange={handleInput}
            value={form.name}
          >
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <option value="" hidden />
            <option>
              Полный день
            </option>
            <option>
              Частичная занятость
            </option>
            <option>
              Проектная работа
            </option>
            <option>
              Стажировка
            </option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="url">
            Сайт компании
          </Label>
          <Input
            id="url"
            name="url"
            type="text"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="contactName">
            Имя контакта
          </Label>
          <Input
            id="contactName"
            name="contact_name"
            type="text"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contactSocial">
            Телеграм
          </Label>
          <Input
            id="contactSocial"
            name="contact_social"
            type="text"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contactPhone">
            Контактный телефон
          </Label>
          <Input
            id="contactPhone"
            name="contact_phone"
            type="text"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="experience">
            Опыт
          </Label>
          <Input
            id="experience"
            name="experience"
            type="textarea"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="aboutCompany">
            О компании
          </Label>
          <Input
            id="aboutCompany"
            name="about_company"
            type="textarea"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="aboutProject">
            О проекте
          </Label>
          <Input
            id="aboutProject"
            name="about_project"
            type="textarea"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="duties">
            Обязанности
          </Label>
          <Input
            id="duties"
            name="duties"
            type="textarea"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="requirements">
            Требования
          </Label>
          <Input
            id="requirements"
            name="requirements"
            type="textarea"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="technology">
            Технологии
          </Label>
          <Input
            id="technology"
            name="technology"
            type="textarea"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <FormGroup>
          <Label for="conditions">
            Условия работы
          </Label>
          <Input
            id="conditions"
            name="conditions"
            type="textarea"
            onChange={handleInput}
            value={form.name}
          />
        </FormGroup>

        <button type="submit" className="btn btn-primary">
          Создать
        </button>
      </Form>
    </div>
  );
}

export default AddVacancy;
