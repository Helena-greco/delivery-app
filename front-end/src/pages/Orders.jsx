import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import TableSales from '../components/TableSales';
import Header from '../components/Header';

const Orders = () => {
  const [sales, setSales] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <TableSales sales={ sales } setSales={ setSales } />
      </Container>
    </>
  );
};

export default Orders;
