import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import '../style/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmailValid = (userEmail) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(userEmail);
  };

  const MIN_LENGTH = 6;

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control type="email" placeholder="Enter email" data-testid="common_login__input-email" onChange={ ({ target }) => setEmail(target.value) } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" data-testid="common_login__input-password" onChange={ ({ target }) => setPassword(target.value) } />
        </Form.Group>
        <Button variant="primary" type="submit" data-testid="common_login__button-login" disabled={ !(isEmailValid(email) && password.length >= MIN_LENGTH) }>
          Login
        </Button>
        <Button variant="outline-primary" type="submit" data-testid="common_login__button-register">
          Ainda não tenho conta
        </Button>
      </Form>
      <Alert key='danger' variant='danger' className="error" data-testid="common_login__element-invalid-email">
        Mensagem de erro.
      </Alert>
    </div >
  );
};

export default Login;
