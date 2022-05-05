import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ButtonCart = ({ totalPrice }) => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      data-testid="customer_products__button-cart"
      onClick={ () => { navigate('/customer/checkout'); } }
    >
      <span data-testid="customer_products__checkout-bottom-value">
        Ver Carrinho: R${ totalPrice }
      </span>
    </Button>
  );
}

export default ButtonCart;