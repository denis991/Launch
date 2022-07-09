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

function UserForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [loginToggle, setLoginToggle] = useState(false);

  const handleForm = () => {
    setLoginToggle(!loginToggle);
  };

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

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
            onChange={handleChange}
            placeholder="Name"
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <Label>Email address</Label>
          <Input
            type="text"
            value={form.email || ''}
            name="email"
            onChange={handleChange}
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
            value={form.password || ''}
            name="password"
            onChange={handleChange}
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
