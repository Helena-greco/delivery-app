import React from 'react';
import PropTypes from 'prop-types';
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
      className="bottom-0 end-0 m-3 z-index-auto"
      style={ { zIndex: 3 } }
      disabled={ totalCart === 0 }
    >
      <span data-testid="customer_products__checkout-bottom-value">
        {`Ver Carrinho: ${totalCart
          .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} `}
      </span>
    </Button>
  );
};

ButtonCart.propTypes = {
  totalCart: PropTypes.number.isRequired,
};

export default ButtonCart;
