import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Customer from '../pages/Customer';
import CheckoutCustomer from '../pages/CheckoutCustomer';
import Orders from '../pages/Orders';
import DetailsOrder from '../pages/DetailsOrder';
import SellersOrders from '../pages/SellersOrders';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={ <Navigate to="/login" /> } />
    <Route exact path="/login" element={ <Login /> } />
    <Route exact path="/register" element={ <Register /> } />
    <Route exact path="/customer/products" element={ <Customer /> } />
    <Route exact path="/customer/checkout" element={ <CheckoutCustomer /> } />
    <Route exact path="/customer/orders" element={ <Orders /> } />
    <Route exact path="/customer/orders/:id" element={ <DetailsOrder /> } />
    <Route exact path="/seller/orders/:id" element={ <SellersOrders /> } />
  </Routes>
);

export default AppRoutes;
