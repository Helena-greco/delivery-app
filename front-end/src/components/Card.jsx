import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CardComponent = ({ id, name, price, urlImage }) => (
  <Card style={ { width: '18rem' } }>
    <Card.Img
      data-testid={ `customer_products__img-card-bg-image-${id}` }
      variant="top"
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
      <Button
        variant="primary"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -

      </Button>
      <input
        type="number"
        style={ { width: '2rem' } }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <Button
        variant="primary"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +

      </Button>
    </Card.Body>
  </Card>
);

CardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default CardComponent;
