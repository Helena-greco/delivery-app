import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

import TableProducts from '../components/TableProducts';
import Header from '../components/Header';
import DetailsDelivery from '../components/DetailsDelivery';

const CheckoutCustomer = () => {
  const [itemsCard, setItemsCard] = useState([]);
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <h1>Finalizar pedido</h1>
        <TableProducts itemsCard={ itemsCard } setItemsCard={ setItemsCard } />
        <Button
          data-testid="customer_checkout__element-order-total-price"
        >
          Total:
          {
            itemsCard.reduce((total, item) => total + item.totalCard, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
          }
        </Button>
        <DetailsDelivery />
        <Button
          onClick={ () => navigate(`/customer/orders/1`) }
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </Button>
      </Container>
    </>
  );
};

export default CheckoutCustomer;
