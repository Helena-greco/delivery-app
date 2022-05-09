import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import DeliveryContext from '../context/deliveryContext';
import TableProducts from '../components/TableProducts';
import Header from '../components/Header';
import DetailsDelivery from '../components/DetailsDelivery';
import { fetchApiCreateOrder } from '../services/fetchApi';

const CheckoutCustomer = () => {
  const [itemsCard, setItemsCard] = useState([]);
  const [endereco, setEndereço] = useState('');
  const [numeroEndereco, setNumeroEndereco] = useState('');
  const navigate = useNavigate();
  const { user } = useContext(DeliveryContext);

  const totalPriceCard = itemsCard.reduce((total, item) => total + item.totalCard, 0);
  const order = {
    userId: 2,
    sellerId: 2,
    totalPrice: totalPriceCard,
    deliveryAddress: endereco,
    deliveryNumber: numeroEndereco,
    status: 'Pendente',
  };

  const completeOrder = async () => {
    const response = await fetchApiCreateOrder(order, user.token);
    const data = await response.json();
    if (typeof data === 'object') return;
    navigate(`/customer/orders/${data}`);
  };

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
            totalPriceCard
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
          }
        </Button>
        <DetailsDelivery
          setNumeroEndereco={ setNumeroEndereco }
          setEndereço={ setEndereço }
        />
        <Button
          onClick={ completeOrder }
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </Button>
      </Container>
    </>
  );
};

export default CheckoutCustomer;
