import React, { useState } from 'react';
import {
  Form, Input, FormGroup, Label, FormText, Button
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addCVThunk } from '../../../../redux/actions/cvsActions';

function AddVacancy() {
  return (
    <Form>
      <FormGroup>
        <Label for="title">
          Название
        </Label>
        <Input
          id="title"
          name="title"
          type="text"
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
        >
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
        >
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
        />
      </FormGroup>

      <FormGroup>
        <Label for="duties">
          Обязанности
        </Label>
        <Input
          id="duties"
          name="about_duties"
          type="textarea"
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
        />
      </FormGroup>

      <Button>
        Submit
      </Button>
    </Form>
  );
}

export default AddVacancy;
