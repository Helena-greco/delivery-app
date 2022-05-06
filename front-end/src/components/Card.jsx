import React, { useState, useEffect } from 'react';
import { Card, Button, Col, InputGroup, FormControl } from 'react-bootstrap';
import '../style/Card.css';
import PropTypes from 'prop-types';

const CardComponent = ({ id, name, price, urlImage, quantityStorage, setTotalCart }) => {
  const [quantity, setQuantity] = useState(quantityStorage);
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

  const totalValueCart = (storage) => {
    const total = storage.reduce((acc, product) => acc + product.totalCard, 0)
      .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    setTotalCart(total);
  }

  useEffect(() => {
    const dataStorage = JSON.parse(localStorage.getItem('carShop')) || [];
    const indexProduct = dataStorage.findIndex((product) => product.id === id);
    if (indexProduct >= 0) {
      dataStorage[indexProduct].totalCard = totalCard;
      dataStorage[indexProduct].quantity = quantity;
    } else {
      dataStorage.push({ id, name, price, quantity, totalCard, urlImage });
    }
    localStorage.setItem('carShop', JSON.stringify([...dataStorage]));
    totalValueCart(dataStorage);
    setTotalCard(quantity * Number(price));
  }, [quantity, totalCard]);
  


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
            { Number(price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }
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
              onClick={ () => handleIncrease() }
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
