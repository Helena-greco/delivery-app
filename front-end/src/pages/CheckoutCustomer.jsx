import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import TableProducts from '../components/TableProducts';
import Header from '../components/Header';

const CheckoutCustomer = () => {
  const [itemsCard, setItemsCard] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <h1>Finalizar pedido</h1>
        <TableProducts itemsCard={ itemsCard } setItemsCard={ setItemsCard } />
        <Button data-testid="customer_checkout__element-order-total-price">
          Total:
          {
            itemsCard.reduce((total, item) => total + item.totalCard, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
          }
        </Button>
      </Container>
    </>
  );
};

export default CheckoutCustomer;
