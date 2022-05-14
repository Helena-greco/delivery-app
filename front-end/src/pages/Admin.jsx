import React, { useState, useEffect } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import HeaderAdmin from '../components/HeaderAdmin';
import { fetchAllUsers, fetchApiAdminRegister } from '../services/fetchApi';
import TableUsers from '../components/TableUsers';

const Orders = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('administrator');
  const [error, setError] = useState(false);

  const ALERT = (
    <Alert
      key="danger"
      variant="danger"
      className="container-sm error text-center mt-3 w-50"
      data-testid="common_register__element-invalid_register"
      style={ { maxWidth: '400px', minWidth: '300px' } }
      onClose={ () => setError(false) }
      dismissible
    >
      Nome ou email já existentes.
    </Alert>
  );

  const getUsers = async () => {
    const response = await fetchAllUsers();
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  const isEmailValid = (userEmail) => {
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regexEmail.test(userEmail);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const result = await fetchApiAdminRegister(name, email, password, role);
    const data = await result.json();
    getUsers();
    const ERROR = 409;
    if (result.status === ERROR) {
      setError(true);
    }
    const STATUS_CODE_CREATED = 201;
    if (result.status === STATUS_CODE_CREATED) {
      setError(false);
    }
    return data;
  };

  useEffect(getUsers, []);

  const MIN_LENGTH_NAME = 12;
  const MIN_LENGTH_EMAIL = 6;

  return (
    <>
      <HeaderAdmin />
      <Container>
        <input
          type="text"
          data-testid="admin_manage__input-name"
          value={ name }
          placeholder="name"
          onChange={ ({ target }) => setName(target.value) }
        />
        <input
          type="text"
          data-testid="admin_manage__input-email"
          value={ email }
          placeholder="email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          type="password"
          data-testid="admin_manage__input-password"
          value={ password }
          placeholder="password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <select
          data-testid="admin_manage__select-role"
          value={ role }
          placeholder="role"
          onChange={ ({ target }) => setRole(target.value) }
        >
          <option value="administrador" selected>administrator</option>
          <option value="seller">seller</option>
          <option value="customer">customer</option>
        </select>
        <Button
          variant="primary"
          type="submit"
          data-testid="admin_manage__button-register"
          disabled={
            !(isEmailValid(email)
            && password.length >= MIN_LENGTH_EMAIL
            && name.length >= MIN_LENGTH_NAME)
          }
          className="mt-3"
          onClick={ handleClick }
        >
          Cadastrar
        </Button>
        { users && <TableUsers users={ users } /> }
        { error && ALERT }
      </Container>
    </>
  );
};

export default Orders;
