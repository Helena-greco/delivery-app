import React from 'react';
import { Card, Button, Col, InputGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CardComponent = ({ id, name, price, urlImage }) => (
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
          >
            -
          </Button>
          <FormControl
            type="number"
            className="text-center"
            data-testid={ `customer_products__input-card-quantity-${id}` }
          />
          <Button
            variant="primary"
            data-testid={ `customer_products__button-card-add-item-${id}` }
          >
            +
          </Button>
        </InputGroup>
      </Card.Body>
    </Card>
  </Col>
);

CardComponent.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
};

export default CardComponent;
