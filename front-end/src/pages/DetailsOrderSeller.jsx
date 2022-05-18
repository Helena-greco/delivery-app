import React, { useState, useEffect } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import TableDetailsOrder from '../components/TableDetailsOrder';
import HeaderSeller from '../components/HeaderSeller';
import { fetchApiOrderById, fetchApiUpdateOrderStatusById } from '../services/fetchApi';

const DetailsOrderSeller = () => {
  // Necessário verificar essa página
  const [itemsOrder, setItemsOrder] = useState({});
  const params = useParams();
  const STATUS = 'seller_order_details__element-order-details-label-delivery-status';

  const getOrderApi = async () => {
    const response = await fetchApiOrderById(params.id);
    const data = await response.json();
    setItemsOrder(data);
  };

  const toPrepareOrder = async () => {
    const { id } = itemsOrder;
    const response = await fetchApiUpdateOrderStatusById(id, 'Preparando');
    const data = await response.json();
    setItemsOrder({ ...itemsOrder, data });
  };

  const inTransitOrder = async () => {
    const { id } = itemsOrder;
    const response = await fetchApiUpdateOrderStatusById(id, 'Em Trânsito');
    const data = await response.json();
    setItemsOrder({ ...itemsOrder, data });
  };

  const toLocaleString = (number) => (
    Number(number).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  );

  useEffect(getOrderApi, [itemsOrder]);

  return (
    <>
      <HeaderSeller />
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
            { moment(itemsOrder.saleDate).format('DD/MM/YYYY') }
          </ListGroup.Item>
          <ListGroup.Item
            data-testid={ STATUS }
          >
            { itemsOrder.status }
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              data-testid="seller_order_details__button-preparing-check"
              onClick={ toPrepareOrder }
              disabled={ itemsOrder.status !== 'Pendente' }
            >
              Preparar Pedido
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              data-testid="seller_order_details__button-dispatch-check"
              onClick={ inTransitOrder }
              disabled={ itemsOrder.status === 'Em Trânsito' }
            >
              Saiu Para Entrega
            </Button>
          </ListGroup.Item>
        </ListGroup>
        { itemsOrder.products && <TableDetailsOrder itemsOrder={ itemsOrder.products } />}
        <Button data-testid="seller_order_details__element-order-total-price">
          Total:
          { toLocaleString(itemsOrder.totalPrice) }
        </Button>
      </Container>
    </>
  );
};

export default DetailsOrderSeller;
