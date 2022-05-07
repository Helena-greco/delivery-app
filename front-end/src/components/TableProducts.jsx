import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import '../style/TableProducts.css';
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

  const toLocaleString = (number) => (
    number.toLocaleString('pt-BR', {
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
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {itemsCard.length ? itemsCard.map((product, index) => (
          <tr key={ index }>
            <td
              className="text-center"
              width={ 1 }
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
              className="text-center align-center"
              width={ 150 }
              data-testid={
                `customer_checkout__element-order-table-quantity-${index}`
              }
            >
              { product.quantity }
            </td>
            <td
              className="text-center"
              width={ 150 }
              data-testid={
                `customer_checkout__element-order-table-unit-price-${index}`
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
              { toLocaleString(product.totalCard) }
            </td>
            <td
              className="text-center"
              width={ 150 }
            >
              <Button
                variant="danger"
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
