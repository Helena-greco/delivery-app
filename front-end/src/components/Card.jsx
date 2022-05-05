import React, { useState, useEffect } from 'react';
import { Card, Button, Col, InputGroup, FormControl } from 'react-bootstrap';
import '../style/Card.css';
import PropTypes from 'prop-types';

const CardComponent = ({ id, name, price, urlImage }) => {
  const [quantity, setQuantity] = useState(0);
  const [totalCard, setTotalCard] = useState(0);

  const handleDecrease = () => {
    setQuantity(quantity - 1);
    if (quantity <= 0) setQuantity(0);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const changeValue = ({ target }) => {
    setQuantity(Number(target.value));
  };

  useEffect(() => {
    setTotalCard(quantity * Number(price));
    const dataStorage = JSON.parse(localStorage.getItem('carShop')) || [];
    const indexProduct = dataStorage.findIndex(product => product.id === id);
    const result = dataStorage.splice(indexProduct, 1, { id, quantity });
    console.log(result);
    localStorage.setItem('carShop', JSON.stringify([ ...dataStorage, result ]));
  }, [quantity]);

  return (
    <Col className="text-center">
      <Card
        className="border-2"
        border="warning"
        style={ { width: '18rem', margin: 'auto', marginTop: '20px' } }
      >
        <Card.Img
          data-testid={ `customer_products__img-card-bg-image-${id}` }
          src={ urlImage }
        />
        <Card.Body>
          <Card.Title
            data-testid={ `customer_products__element-card-title-${id}` }
          >
            { name }
          </Card.Title>
          <Card.Text
            data-testid={ `customer_products__element-card-price-${id}` }
          >
            { price.replace('.', ',') }
          </Card.Text>
          <InputGroup
            className="mb-3 w-50"
            style={ { margin: 'auto' } }
          >
            <Button
              variant="warning"
              data-testid={ `customer_products__button-card-rm-item-${id}` }
              onClick={ handleDecrease }
            >
              -
            </Button>
            <FormControl
              type="number"
              className="text-center"
              data-testid={ `customer_products__input-card-quantity-${id}` }
              value={ quantity }
              onChange={ changeValue }
            />
            <Button
              variant="warning"
              data-testid={ `customer_products__button-card-add-item-${id}` }
              onClick={ () => handleIncrease(price) }
            >
              +
            </Button>
          </InputGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

CardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default CardComponent;
