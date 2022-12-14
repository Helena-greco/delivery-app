import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import '../style/TableProducts.css';
import PropTypes from 'prop-types';
import moment from 'moment';

const TableProducts = ({ sales }) => {
  const navigate = useNavigate();

  const navigateForSaleDetails = (id) => {
    navigate(`/customer/orders/${id}`);
  };

  const toLocaleString = (number) => (
    Number(number).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  );

  return (
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
          <tr
            onClick={ () => navigateForSaleDetails(id) }
            key={ index }
          >
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
              { moment(saleDate).format('DD/MM/YYYY') }
            </td>
            <td
              className="text-center"
              width={ 150 }
              data-testid={
                `customer_orders__element-card-price-${id}`
              }
            >
              { toLocaleString(totalPrice) }
            </td>
          </tr>
        )) : <p>Você não possui pedidos.</p> }
      </tbody>
    </Table>
  );
};

TableProducts.propTypes = {
  sales: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};

export default TableProducts;
