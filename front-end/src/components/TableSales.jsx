import React from 'react';
import { Table } from 'react-bootstrap';
import '../style/TableProducts.css';
import PropTypes from 'prop-types';

const TableProducts = ({ sales }) => (
  <Table striped bordered hover>
    <thead>
      <tr className="text-center">
        <th>Pedido</th>
        <th>Status</th>
        <th>Data</th>
        <th>Valor Total</th>
      </tr>
    </thead>
    <tbody>
      { sales.length ? sales.map(({ id, status, saleDate, totalPrice }, index) => (
        <tr key={ index }>
          <td
            className="text-center"
            width={ 1 }
            data-testid={
              `customer_orders__element-order-id-${id}`
            }
          >
            { id }
          </td>
          <td
            data-testid={
              `customer_orders__element-delivery-status-${id}`
            }
          >
            { status }
          </td>
          <td
            className="text-center align-center"
            width={ 150 }
            data-testid={
              `customer_orders__element-order-date-${id}`
            }
          >
            { saleDate }
          </td>
          <td
            className="text-center"
            width={ 150 }
            data-testid={
              `customer_orders__element-card-price-${id}`
            }
          >
            { totalPrice }
          </td>
        </tr>
      )) : <p>Você não possui pedidos.</p> }
    </tbody>
  </Table>
);

TableProducts.propTypes = {
  sales: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default TableProducts;
