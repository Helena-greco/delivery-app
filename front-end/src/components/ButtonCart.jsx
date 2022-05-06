import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ButtonCart = ({ totalCart }) => {
  const navigate = useNavigate();


  return (
    <Button
      size="lg"
      type="button"
      variant="success"
      data-testid="customer_products__button-cart"
      onClick={ () => { navigate('/customer/checkout'); } }
      className="position-fixed bottom-0 end-0 m-3 z-index-auto"
      style={ { zIndex: 3 } }
      disabled={ parseInt(totalCart, 10) === 0 }
    >
      <span data-testid="customer_products__checkout-bottom-value">
        {`Ver Carrinho: ${ totalCart }`}
      </span>
    </Button>
  );
};

export default ButtonCart;
