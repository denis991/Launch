import React, { useState } from 'react';
import {
  Form, Input, FormGroup, Label, FormText, Button
} from 'reactstrap';
import { useDispatch } from 'react-redux';
import { addCVThunk } from '../../../../redux/actions/cvsActions';

function AddVacancy() {
  const options = [
    { value: 'Джуниор', label: 'Джуниор' },
    { value: 'Стажер', label: 'Стажер' },
  ];

  return (
    <Form>
      <FormGroup>
        <Label for="title">
          Название
        </Label>
        <Input
          id="title"
          name="title"
          placeholder="введите название вакансии"
          type="text"
        />
      </FormGroup>

      <FormGroup>
        <Label for="level">
          Select
        </Label>
        <Input
          id="exampleSelect"
          name="select"
          type="select"
        >
          <option>
            1
          </option>
          <option>
            2
          </option>
          <option>
            3
          </option>
          <option>
            4
          </option>
          <option>
            5
          </option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="password placeholder"
          type="password"
        />
      </FormGroup>

      <FormGroup>
        <Label for="exampleSelectMulti">
          Select Multiple
        </Label>
        <Input
          id="exampleSelectMulti"
          multiple
          name="selectMulti"
          type="select"
        >
          <option>
            1
          </option>
          <option>
            2
          </option>
          <option>
            3
          </option>
          <option>
            4
          </option>
          <option>
            5
          </option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">
          Text Area
        </Label>
        <Input
          id="exampleText"
          name="text"
          type="textarea"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">
          File
        </Label>
        <Input
          id="exampleFile"
          name="file"
          type="file"
        />
        <FormText>
          This is some placeholder block-level help text for the above input.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>
          Radio Buttons
        </legend>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Option one is this and that—be sure to include why
          </Label>
        </FormGroup>
        <FormGroup check>
          <Input
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup
          check
          disabled
        >
          <Input
            disabled
            name="radio1"
            type="radio"
          />
          {' '}
          <Label check>
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Input type="checkbox" />
        {' '}
        <Label check>
          Check me out
        </Label>
      </FormGroup>
      <Button>
        Submit
      </Button>
    </Form>
  );
}

export default AddVacancy;
