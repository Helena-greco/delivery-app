import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ButtonCart = ({ totalPrice }) => {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      data-testid="customer_products__button-cart"
      onClick={ () => { navigate('/customer/checkout'); } }
      className="position-fixed bottom-0 end-0 m-3 z-index-auto"
      style={ { zIndex: 3 } }
    >
      <span data-testid="customer_products__checkout-bottom-value">
        Ver Carrinho: R$
        { totalPrice }
      </span>
    </Button>
  );
};

ButtonCart.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default ButtonCart;
