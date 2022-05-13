import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Figure, Form, Button, Alert } from 'react-bootstrap';
import Logo from '../images/one-more-beer-logo.jpeg';
import { fetchApi } from '../services/fetchApi';
import DeliveryContext from '../context/deliveryContext';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(DeliveryContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const isEmailValid = (userEmail) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(userEmail);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await fetchApi(email, password);
    const ERROR = 404;
    if (result.status === ERROR) {
      setError(true);
    }
    const POST = 200;
    if (result.status === POST) {
      const body = await result.json();
      const { id, name, role, token } = body;
      setUser({ id, name, email, role, token });
      localStorage.setItem('user', JSON.stringify({ id, name, email, role, token }));
      if (role === 'customer') navigate('/customer/products');
      if (role === 'administrator') navigate('/admin/manage');
      if (role === 'seller') navigate('/seller/orders');
    }
  };

  const userIsOn = () => {
    const dataStorage = JSON.parse(localStorage.getItem('user'));
    if (dataStorage) {
      const { id, name, role, token } = dataStorage;
      setUser({ id, name, role, token });
    }
  };

  useEffect(userIsOn, []);

  const MIN_LENGTH = 6;
  const ALERT = (
    <Alert
      key="danger"
      variant="danger"
      className="container-sm error text-center mt-3 w-50"
      data-testid="common_login__element-invalid-email"
      style={ { maxWidth: '400px', minWidth: '300px' } }
      onClose={ () => setError(false) }
      dismissible
    >
      Login ou senha incorretos.
    </Alert>
  );

  return (
    <Container style={ { marginTop: '20px' } }>
      <Figure className="container-sm text-center">
        <Figure.Image
          width={ 230 }
          alt="one-more-beer-logo"
          src={ Logo }
          className="rounded-3"
        />
      </Figure>
      <Form
        className="card mt-3 pb-3 pt-1 container-sm w-50"
        style={ { maxWidth: '400px', minWidth: '300px' } }
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="email"
            placeholder="email@trybeer.com.br"
            data-testid="common_login__input-email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="**********"
            data-testid="common_login__input-password"
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          data-testid="common_login__button-login"
          disabled={ !(isEmailValid(email) && password.length >= MIN_LENGTH) }
          className="mt-3"
          onClick={ handleClick }
        >
          Login
        </Button>
        <Button
          variant="outline-primary"
          type="submit"
          data-testid="common_login__button-register"
          className="mt-3"
          onClick={ () => { navigate('/register'); } }
        >
          Ainda não tenho conta
        </Button>
      </Form>
      { error && ALERT }
    </Container>
  );
};

export default Login;
