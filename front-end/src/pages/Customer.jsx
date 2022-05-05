import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Header from '../components/Header';
import CardComponent from '../components/Card';
import ButtonCart from '../components/ButtonCart';
import { fetchApiProducts } from '../services/fetchApi';

const Customer = () => {
  const [products, setProducts] = useState([]);
  const [totalCard, setTotalCard] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const apiProducts = async () => {
      const response = await fetchApiProducts();
      const data = await response.json();
      setProducts(data);
    };
    apiProducts();
  }, []);

  const mapProducts = () => products.map((product, index) => (
    <CardComponent
      id={ index + 1 }
      key={ product.id }
      name={ product.name }
      price={ product.price }
      urlImage={ product.urlImage }
      setTotalCard={ setTotalCard }
      totalCard={ totalCard }
    />
  ));

  return (
    <>
      <Header />
      <Row className="g-5 text-center">
        { mapProducts() }
      <ButtonCart totalPrice={ total }/>
      </Row>
    </>
  );
};

export default Customer;
