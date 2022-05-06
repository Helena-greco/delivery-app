import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ButtonCart = () => {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  const getTotalPrice = () => {
    const dataStorage = JSON.parse(localStorage.getItem('carShop')) || [];
    const total = dataStorage.reduce((acc, product) => acc + product.totalCard, 0);
    const formatedNumber = Number(total).toFixed(2).replace('.', ',');
    setTotalPrice(formatedNumber);
  };

  useEffect(() => {
    getTotalPrice();
  }, [totalPrice]);

  return (
    <Button
      size="lg"
      type="button"
      variant="success"
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

export default ButtonCart;
