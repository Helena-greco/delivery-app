import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DetailsDelivery = ({ setEndereço, setNumeroEndereco }) => (
  <Form
    className="card mt-3 pb-3 pt-1 w-50"
    style={ { maxWidth: '500px', minWidth: '300px' } }
  >
    <Form.Group className="mb-3" controlId="formBasicAddress">
      <Form.Label>Endereço</Form.Label>
      <Form.Control
        type="string"
        data-testid="customer_checkout__input-address"
        onChange={ ({ target }) => setEndereço(target.value) }
      />
      <Form.Label>Número</Form.Label>
      <Form.Control
        type="string"
        data-testid="customer_checkout__input-addressNumber"
        onChange={ ({ target }) => setNumeroEndereco(target.value) }
      />
    </Form.Group>
  </Form>
);

DetailsDelivery.propTypes = {
  setEndereço: PropTypes.func.isRequired,
  setNumeroEndereco: PropTypes.func.isRequired,
};

export default DetailsDelivery;
