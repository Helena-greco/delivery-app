import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardComponent = ({ id, name, price, url_image }) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img data-testid={`customer_products__img-card-bg-image-${id}`} variant="top" src={ url_image } />
        <Card.Body>
          <Card.Title data-testid={`customer_products__element-card-title-${id}`}>{ name }</Card.Title>
          <Card.Text data-testid={`customer_products__element-card-price-${id}`}>{ price }</Card.Text>
          <Button variant="primary" data-testid={`customer_products__button-card-rm-item-${id}`}>-</Button>
          <input type="number" style={{ width: '2rem' }} data-testid={`customer_products__input-card-quantity-${id}`}/>
          <Button variant="primary" data-testid={`customer_products__button-card-add-item-${id}`}>+</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardComponent;