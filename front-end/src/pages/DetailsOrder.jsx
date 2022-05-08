import React, { useState, useEffect } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import TableDetailsOrder from '../components/TableDetailsOrder';
import Header from '../components/Header';
import { fetchApiOrders } from '../services/fetchApi';

const DetailsOrder = () => {
  const [itemsOrder, setItemsOrder] = useState([]);

  useEffect(async () => {
    const response = await fetchApiOrderById();
    const data = await response.json();
    setItemsOrder(data)
  }, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Detalhes do pedido</h1>
        <ListGroup horizontal="md" className="my-2">
          <ListGroup.Item
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            { `PEDIDO: ${itemsOrder.id}` }
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            { itemsOrder.date }
          </ListGroup.Item>
          <ListGroup.Item
            data-testid={ `seller_order_details__element-
                      order-details-label-delivery-status` }
          >
            { itemsOrder.statusOrder }
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
        <TableDetailsOrder itemsOrder={ itemsOrder } />
        <Button data-testid="seller_order_details__element-order-total-price">
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

export default DetailsOrder;
