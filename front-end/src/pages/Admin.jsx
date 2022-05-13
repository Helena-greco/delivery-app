import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TableSales from '../components/TableSales';
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
    name,
    email,
    password,
    role
  }

  useEffect(getUsers, []);

  return (
    <>
      <Header />
      <Container>
        <div>
          <input
            type='text'
            data-testid='admin_manage__input-email'
          >
            { newUser.name }
          </input>
          <input
            type='text'
            data-testid='admin_manage__input-email'
          >
            { newUser.email }
          </input>
          <input
            type='text'
            data-testid='admin_manage__input-password'
          >
            { newUser.password }
          </input>
          <input
            type='text'
            data-testid='admin_manage__button-register'
          >
            { newUser.type }
          </input>
        </div>
        <TableUsers users={ users } />
      </Container>
    </>
  );
};

export default Orders;
