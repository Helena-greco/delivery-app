import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './deliveryContext';

const DeliveryProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [sellers, setSellers] = useState([]);
  const [saleStatus, setSaleStatus] = useState('');

  const context = {
    user,
    setUser,
    sellers,
    setSellers,
    saleStatus,
    setSaleStatus,
  };
  return (
    <DeliveryContext.Provider value={ context }>
      {children}
    </DeliveryContext.Provider>
  );
};

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
