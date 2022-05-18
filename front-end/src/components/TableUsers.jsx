import React from 'react';
import { Table } from 'react-bootstrap';

import PropTypes from 'prop-types';

const TableUsers = ({ users }) => (
  <Table striped bordered hover>
    <thead>
      <tr className="text-center">
        <th>Item</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Tipo</th>
        <th>Excluir</th>
      </tr>
    </thead>
    <tbody>
      { users.map(({ id, name, email, role }, index) => (
        <tr
          key={ index }
        >
          <td
            className="text-center"
            width={ 1 }
            data-testid={
              `admin_manage__element-user-table-item-number-${index}`
            }
          >
            { id }
          </td>
          <td
            data-testid={
              `admin_manage__element-user-table-name-${index}`
            }
          >
            { name }
          </td>
          <td
            className="text-center align-center"
            width={ 150 }
            data-testid={
              `admin_manage__element-user-table-email-${index}`
            }
          >
            { email }
          </td>
          <td
            className="text-center"
            width={ 150 }
            data-testid={
              `admin_manage__element-user-table-role-${index}`
            }
          >
            { role }
          </td>
          <td
            className="text-center"
            width={ 150 }
            data-testid={
              `admin_manage__element-user-table-remove-${index}`
            }
          >
            Excluir
          </td>
        </tr>
      )) }
    </tbody>
  </Table>
);

TableUsers.propTypes = {
  users: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default TableUsers;
