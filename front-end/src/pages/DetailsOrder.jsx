import React, { useState, useEffect, useContext } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import TableDetailsOrder from '../components/TableDetailsOrder';
import Header from '../components/Header';
import { fetchApiOrderById, fetchApiGetSellers } from '../services/fetchApi';
import DeliveryContext from '../context/deliveryContext';

const DetailsOrder = () => {
  // Necessário pegar o nome do vendedor pelo banco de dados
  // Necessário pegar o index do botão -> Total R$ x,xx
  // Organizar a melhor a data mostrada
  const [itemsOrder, setItemsOrder] = useState({});
  const params = useParams();
  const { sellers, setSellers } = useContext(DeliveryContext);
  // const DEZ = 10;

  const status = 'customer_order_details__element-order-details-label-delivery-status';

  const getOrderApi = async () => {
    const response = await fetchApiOrderById(params.id);
    const data = await response.json();
    setItemsOrder(data);
  };

  const getSellers = async () => {
    const response = await fetchApiGetSellers();
    const data = await response.json();
    setSellers(data);
  };

  console.log(itemsOrder);

  const getSellerNameById = () => {
    const getSeller = sellers.find((seller) => seller.id === itemsOrder.seller_id);
    return getSeller.name;
  };

  const toLocaleString = (number) => (
    Number(number).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  );

  useEffect(getOrderApi, []);

  useEffect(() => {
    getSellers();
  }, []);

  if (!sellers.length) return <div> Carregando ... </div>;

  return (
    <>
      <Header />
      <Container>
        <h1
          data-testid="customer_products__element-navbar-link-orders"
        >
          Detalhe do pedido
        </h1>
        <ListGroup horizontal="md" className="my-2">
          <ListGroup.Item
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`PEDIDO: ${itemsOrder.id}`}
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            { (typeof itemsOrder.seller_id === 'number') ? getSellerNameById() : null }
            {/* P. Fulana Pereira */}
          </ListGroup.Item>
          <ListGroup.Item
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {moment(itemsOrder.saleDate).format('DD/MM/YYYY')}
          </ListGroup.Item>
          <ListGroup.Item
            data-testid={ status }
          >
            { itemsOrder.status }
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              data-testid="customer_order_details__button-delivery-check"
            >
              Marcar como entregue
            </Button>
          </ListGroup.Item>
        </ListGroup>
        { itemsOrder.products
          && <TableDetailsOrder itemsOrder={ itemsOrder.products } /> }
        <Button
          data-testid="customer_order_details__element-order-total-price"
        >
          {`Total: ${toLocaleString(itemsOrder.totalPrice)}`}
        </Button>
      </Container>
    </>
  );
};

export default DetailsOrder;
