import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardComponent from '../components/Card';
import { fetchApiProducts } from '../services/fetchApi';

const Customer = () => {
  const [products, setProducts] = useState([]);

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
      urlImage={ product.url_image }
    />
  ));

  return (
    <>
      <Header />
      <h1>Cliente</h1>
      { mapProducts() }
    </>
  );
};

export default Customer;
