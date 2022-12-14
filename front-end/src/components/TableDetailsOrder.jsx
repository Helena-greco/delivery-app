import React from 'react';
import { Table } from 'react-bootstrap';

import '../style/TableProducts.css';
import PropTypes from 'prop-types';

const TableDetailsOrder = ({ itemsOrder }) => {
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
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        { itemsOrder.map((product, index) => (
          <tr key={ index }>
            <td
              className="text-center"
              width={ 1 }
              data-testid={
                `customer_order__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={
                `customer_order__element-order-table-name-${index}`
              }
            >
              { product.name }
            </td>
            <td
              className="text-center align-center"
              width={ 150 }
              data-testid={
                `customer_order__element-order-table-quantity-${index}`
              }
            >
              { product.saleProduct.quantity }
            </td>
            <td
              className="text-center"
              width={ 150 }
              data-testid={
                `customer_order__element-order-table-unit-price-${index}`
              }
            >
              { toLocaleString(product.price) }
            </td>
            <td
              className="text-center"
              width={ 150 }
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              { toLocaleString(product.saleProduct.quantity * product.price) }
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TableDetailsOrder.propTypes = {
  itemsOrder: PropTypes.shape({
    length: PropTypes.func,
    map: PropTypes.func,
  }).isRequired,
};

export default TableDetailsOrder;
