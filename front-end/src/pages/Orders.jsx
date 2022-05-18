import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import TableSales from '../components/TableSales';
import Header from '../components/Header';
import { fetchApiOrders } from '../services/fetchApi';

const Orders = () => {
  const [sales, setSales] = useState([]);

  const getSales = async () => {
    const response = await fetchApiOrders();
    const data = await response.json();
    setSales(data);
  };

  useEffect(() => {
    getSales();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TableSales sales={ sales } />
      </Container>
    </>
  );
};

export default Orders;
