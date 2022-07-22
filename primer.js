import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  FormText,
} from 'reactstrap';
import { userAuthThunk } from '../../../../redux/actions/AuthAction';

// const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

const useInput = (initialValue) => {
  const [form, setForm] = useState({});
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  setForm((prev) => ({ ...prev, [initialValue.target.name]: initialValue.target.value }));

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
  };
};

function UserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useInput('');
  const password = useInput('');

  const [form, setForm] = useState({});
  const [loginToggle, setLoginToggle] = useState(false);

  const handleForm = () => {
    setLoginToggle(!loginToggle);
  };

  // const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userAuthThunk(loginToggle, form));
    setForm({});
    navigate('/');
  };

  return (
    <div className="userForm">
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="formBasicName">
          <Label>Name</Label>
          <Input
            type="text"
            value={form.name || ''}
            name="name"
            disabled={loginToggle}
            onChange={(e)=>{
              console.log("tttttttt");
              useInput(e)}}
            placeholder="Name"
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <Label>Email address</Label>
          <Input
            type="text"
            value={email.value}
            name="email"
            onChange={(e) => email.onChange(e)}
            onBlur={(e) => email.onBlur}
            placeholder="Email"
          />
          <FormText className="text-muted">
            Well never share your email with anyone else.
          </FormText>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicPassword">
          <Label>Password</Label>
          <Input
            type="password"
            value={password.value}
            name="password"
            onChange={(e) => password.onChange(e)}
            onBlur={(e) => password.onBlur}
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicCheckbox">
          <input type="checkbox" onChange={handleForm} />
          <span>{loginToggle ? 'Back to registration' : 'To login'}</span>
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserForm;
