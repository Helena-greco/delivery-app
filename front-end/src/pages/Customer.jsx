import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../components/Header';
import CardComponent from '../components/Card';
import ButtonCart from '../components/ButtonCart';
import { fetchApiProducts } from '../services/fetchApi';

const Customer = () => {
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  const getProducts = async () => {
    const response = await fetchApiProducts();
    const data = await response.json();
    const dataStorage = JSON.parse(localStorage.getItem('carShop'));
    if (dataStorage) {
      dataStorage.forEach((item) => {
        data.find((e) => e.id === item.id).quantity = item.quantity;
      });
      setProducts(data);
      return;
    }
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
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
        { mapProducts() }
      </Row>
      <ButtonCart totalCart={ totalCart } />
    </>
  );
};

export default Customer;
