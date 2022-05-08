import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import TableDetailsOrder from '../components/TableDetailsOrder';
import Header from '../components/Header';
import DetailsDelivery from '../components/DetailsDelivery';

const DetailsOrder = () => {
  const [itemsCard, setItemsCard] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <h1>Detalhes do pedido</h1>
        <ListGroup horizontal='md' className="my-2">
          <ListGroup.Item
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            PEDIDO: {id}
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            { date }
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="seller_order_details__element-order-details-label-delivery-status"
          >
            { status }
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="seller_order_details__button-preparing-check"
          >
            <Button>Preparar Pedido</Button>
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="seller_order_details__button-dispatch-check"
          >
            <Button>Saiu Para Entrega</Button>
          </ListGroup.Item>
        </ListGroup>
        <TableDetailsOrder itemsCard={ itemsCard } setItemsCard={ setItemsCard } />
        <Button data-testid="seller_order_details__element-order-total-price">
          Total:
          {
            itemsCard.reduce((total, item) => total + item.totalCard, 0)
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
          }
        </Button>
        <DetailsDelivery />
      </Container>
    </>
  );
};

export default DetailsOrder;
