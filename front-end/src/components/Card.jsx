import React, { useState } from 'react';
import { Card, Button, Col, InputGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CardComponent = ({ id, name, price, urlImage }) => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Col className="text-center">
      <Card style={ { width: '18rem', margin: 'auto' } }>
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
              variant="primary"
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
            />
            <Button
              variant="primary"
              data-testid={ `customer_products__button-card-add-item-${id}` }
              onClick={ handleIncrease }
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
