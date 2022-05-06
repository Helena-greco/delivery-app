import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TableProducts from '../components/TableProducts';
import Header from '../components/Header';

const CheckoutCustomer = () => {
  const [itemsCard, setItemsCard] = useState([]);

  // useEffect(() => {
  //   const dataStorage = JSON.parse(localStorage.getItem('carShop')) || [];
  //   const filteredItems = dataStorage.filter((product) =>product.totalCard > 0);
  //   setItemsCard(filteredItems);
  // }, []);

  return (
    <>
      <Header />
      <h1>Finalização da compra do cliente</h1>
      <Container>
        <TableProducts itemsCard={ itemsCard } setItemsCard={ setItemsCard } />
      </Container>
    </>
)};

export default CheckoutCustomer;
