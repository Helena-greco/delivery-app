import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import { fetchAllUsers } from '../services/fetchApi';
import TableUsers from '../components/TableUsers';

const Orders = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetchAllUsers();
    const data = await response.json();
    setUsers(data);
  };

  const newUser = {
    newName,
    email,
    password,
    role,
  };

  useEffect(getUsers, []);

  return (
    <>
      <Header />
      <Container>
        <input
          type="text"
          data-testid="admin_manage__input-email"
          value={ newUser.newName }
        />
        <input
          type="text"
          data-testid="admin_manage__input-email"
          value={ newUser.email }
        />
        <input
          type="text"
          data-testid="admin_manage__input-password"
          value={ newUser.password }
        />
        <input
          type="text"
          data-testid="admin_manage__button-register"
          value={ newUser.role }
        />
        <TableUsers users={ users } />
      </Container>
    </>
  );
};

export default Orders;
