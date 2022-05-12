import React, { useState, useEffect, useContext } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import TableDetailsOrder from '../components/TableDetailsOrder';
import Header from '../components/Header';
import { fetchApiOrderById } from '../services/fetchApi';
import DeliveryContext from '../context/deliveryContext';

const DetailsOrder = () => {
  // Necessário pegar o nome do vendedor pelo banco de dados
  // Necessário pegar o index do botão -> Total R$ x,xx
  // Organizar a melhor a data mostrada
  const [itemsOrder, setItemsOrder] = useState(['']);
  const params = useParams();
  const { sellers } = useContext(DeliveryContext);
  // const DEZ = 10;

  const status = 'customer_order_details__element-order-details-label-delivery-status';

  const getOrderApi = async () => {
    const response = await fetchApiOrderById(params.id);
    const data = await response.json();
    setItemsOrder(data);
    console.log(sellers);
  };

  const toLocaleString = (number) => (
    Number(number).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  );

  /* const getBySellerId = sellers.find((seller) => seller.id === itemsOrder.seller_id);
  console.log(getBySellerId.name);
  console.log(sellers) */

  useEffect(getOrderApi, []);

  return (
    <>
      <Header />
      <Container>
        <h1>Detalhe do pedido</h1>
        <ListGroup horizontal="md" className="my-2">
          <ListGroup.Item
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            { `PEDIDO: ${itemsOrder.id}` }
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P. Vend: Fulana Pereira
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            { moment(itemsOrder.saleDate).format('L') }
          </ListGroup.Item>
          <ListGroup.Item
            data-testid={ status }
          >
            { itemsOrder.status }
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="customer_order_details__button-delivery-check"
          >
            <Button>Marcar como entregue</Button>
          </ListGroup.Item>
        </ListGroup>
        { itemsOrder.products && <TableDetailsOrder itemsOrder={ itemsOrder.products } />}
        <Button
          data-testid="customer_order_details__element-order-table-unit-price"
        >
          { `Total: ${toLocaleString(itemsOrder.totalPrice)}` }
        </Button>
      </Container>
    </>
  );
};

export default DetailsOrder;
