import React, { useState, useEffect, useContext } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../components/Header';
import CardComponent from '../components/Card';
import ButtonCart from '../components/ButtonCart';
import { fetchApiProducts } from '../services/fetchApi';
import DeliveryContext from '../context/deliveryContext';

const Customer = () => {
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(DeliveryContext);

  const getProducts = async () => {
    const response = await fetchApiProducts();
    const data = await response.json();
    /* const dataStorage = JSON.parse(localStorage.getItem('carShop'));
    if (dataStorage) {
      dataStorage.forEach((item) => {
        data.find((e) => e.id === item.id).quantity = item.quantity;
      });
      setProducts(data);
      return;
    } */
    setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
    localStorage.removeItem('carShop');
    const dataStorage = JSON.parse(localStorage.getItem('user'));
    if (dataStorage) {
      const { id, name, role, token } = dataStorage;
      setUser({ id, name, role, token });
    }
  }, []);

  const mapProducts = () => products.map((product, index) => (
    <CardComponent
      id={ index + 1 }
      key={ product.id }
      name={ product.name }
      price={ Number(product.price) }
      quantityStorage={ product.quantity || 0 }
      urlImage={ product.urlImage }
      setTotalCart={ setTotalCart }
    />
  ));

  return (
    <>
      <Header />
      <Row className="g-5 text-center">
        { !loading && mapProducts() }
      </Row>
      <ButtonCart totalCart={ totalCart } />
    </>
  );
};

export default Customer;
