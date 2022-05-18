import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import DeliveryContext from '../context/deliveryContext';
import TableProducts from '../components/TableProducts';
import Header from '../components/Header';
import DetailsDelivery from '../components/DetailsDelivery';
import {
  fetchApiCreateOrder,
  fetchApiGetSellers,
  fetchApiCreateSaleProducts,
} from '../services/fetchApi';

const CheckoutCustomer = () => {
  const [itemsCard, setItemsCard] = useState([]);
  const [endereco, setEndereço] = useState('');
  const [numeroEndereco, setNumeroEndereco] = useState('');
  const [sellerSelected, setSellerSelected] = useState(0);
  const navigate = useNavigate();
  const { user, sellers, setSellers } = useContext(DeliveryContext);

  const totalPriceCard = itemsCard.reduce((total, item) => total + item.totalCard, 0);
  const order = {
    userId: user.id,
    sellerId: sellerSelected,
    totalPrice: totalPriceCard,
    deliveryAddress: endereco,
    deliveryNumber: numeroEndereco,
    status: 'Pendente',
  };

  const completeOrder = async () => {
    const response = await fetchApiCreateOrder(order, user.token);
    const data = await response.json();
    if (typeof data === 'object') return;
    const items = JSON.parse(localStorage.getItem('carShop'));
    const newItems = items.map(({ id, quantity }) => ({ id, quantity, sale_id: data }));
    await fetchApiCreateSaleProducts(newItems, user.token);
    localStorage.removeItem('carShop');
    navigate(`/customer/orders/${data}`);
  };

  const getSellers = async () => {
    const response = await fetchApiGetSellers();
    const data = await response.json();
    setSellers(data);
    return data;
  };

  useEffect(() => {
    getSellers();
  }, []);

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
        <Form.Select
          data-testid="customer_checkout__select-seller"
          aria-label="Vendedor Responsável:"
          onChange={ ({ target }) => setSellerSelected(Number(target.value)) }
        >
          <option disabled selected>Escolha um vendedor</option>
          { sellers.map((seller) => (
            <option key={ seller.id } value={ seller.id }>
              { seller.name }
            </option>
          ))}
        </Form.Select>
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
