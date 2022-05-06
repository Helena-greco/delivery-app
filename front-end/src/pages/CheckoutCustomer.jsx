import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
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
      </Container>
    </>
  );
};

export default CheckoutCustomer;
