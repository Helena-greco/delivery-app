import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const TableProducts = ({ itemsCard, setItemsCard }) => {
  const dataStorage = JSON.parse(localStorage.getItem('carShop')) || [];
  const filteredItems = dataStorage.filter((product) => product.totalCard > 0);

  useEffect(() => {
    setItemsCard(filteredItems);
  }, []);

  const handleItems = (index) => {
    const items = filteredItems;
    items.splice(index, 1);
    localStorage.setItem('carShop', JSON.stringify(items));
    setItemsCard(items);
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Subtotal</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {itemsCard.length ? itemsCard.map((product, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              { index + 1 }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-name-${index}`
              }
            >
              { product.name }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
            >
              { product.quantity }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
              }
            >
              { product.price }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              { product.totalCard }
            </td>
            <td>
              <Button
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
                onClick={ () => { handleItems(index); } }
              >
                Remover
              </Button>
            </td>
          </tr>
        )) : <p>Você não adicionou nenhum item.</p>}
      </tbody>
    </Table>
  );
};

TableProducts.propTypes = {
  itemsCard: PropTypes.shape({
    length: PropTypes.func,
    map: PropTypes.func,
  }).isRequired,
  setItemsCard: PropTypes.func.isRequired,
};

export default TableProducts;
