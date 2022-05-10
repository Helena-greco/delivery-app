import React, { useState, useEffect } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import TableDetailsOrder from '../components/TableDetailsOrder';
import Header from '../components/Header';
import { fetchApiOrderById } from '../services/fetchApi';

const DetailsOrder = () => {
  const [itemsOrder, setItemsOrder] = useState(['']);
  const params = useParams();

  const getOrderApi = async () => {
    const response = await fetchApiOrderById(params.id);
    const [data] = await response.json();
    setItemsOrder(data);
  };

  useEffect(getOrderApi, []);

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
            { itemsOrder.saleDate }
          </ListGroup.Item>
          <ListGroup.Item
            data-testid={ `seller_order_details__element-
                      order-details-label-delivery-status` }
          >
            { itemsOrder.status }
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
        <TableDetailsOrder itemsOrder={ itemsOrder.products } />
        <Button data-testid="seller_order_details__element-order-total-price">
          Total:
          { itemsOrder.totalPrice }
        </Button>
      </Container>
    </>
  );
};

export default DetailsOrder;
