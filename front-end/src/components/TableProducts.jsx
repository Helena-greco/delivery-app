import React, { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';

const TableProducts = ({ itemsCard, setItemsCard }) => {

  const dataStorage = JSON.parse(localStorage.getItem('carShop')) || [];
  const filteredItems = dataStorage.filter((product) =>product.totalCard > 0);

  useEffect(() => {
    
  }, [itemsCard]);

  const handleItems = (index) => {
    const items = filteredItems;
    items.splice(index, 1);
    localStorage.setItem('carShop', JSON.stringify(items));
    setItemsCard(items);
  }

  // useEffect(() => {
  //   handleItems()
  // }, [itemsCard]);

  return (
  <>
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
        { itemsCard.length && itemsCard.map((product, index) => (
          <tr key={ index }>
            <td>{index + 1}</td>
            <td data-testid={`customer_checkout__element-order-table-name-${index + 1}`}>{product.name}</td>
            <td data-testid={`customer_checkout__element-order-table-quantity-${index + 1}`}>{product.quantity}</td>
            <td data-testid={`customer_checkout__element-order-table-unit-price-${index + 1}`}>{product.price}</td>
            <td data-testid={`customer_checkout__element-order-table-sub-total-${index + 1}`}>{product.totalCard}</td>
            <td>
              <Button
                data-testid={`customer_checkout__element-order-table-remove-${index + 1}`}
                onClick={() => { handleItems(index)}}
              >
                Remover
              </Button>
            </td>
          </tr>
        )) }
      </tbody>
    </Table>
  </>
  );
}

export default TableProducts;