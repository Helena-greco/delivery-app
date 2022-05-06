import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../components/Header';
import CardComponent from '../components/Card';
import ButtonCart from '../components/ButtonCart';
import { fetchApiProducts } from '../services/fetchApi';

const Customer = () => {
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(async () => {
    const dataStorage = JSON.parse(localStorage.getItem('carShop'));
    console.log(dataStorage);
    if (dataStorage) {
      setProducts(dataStorage);
    } else {
      const response = await fetchApiProducts();
      const data = await response.json();
      setProducts(data);
    }
  }, []);

  const mapProducts = () => products.map((product, index) => (
    <CardComponent
      id={ index + 1 }
      key={ product.id }
      name={ product.name }
      price={ product.price }
      urlImage={ product.urlImage }
      quantityStorage={ product.quantity || 0 }
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
