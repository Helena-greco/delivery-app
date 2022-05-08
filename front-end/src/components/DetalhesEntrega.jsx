import React from 'react';
import { Button, Form } from 'react-bootstrap';

const DetalhesEntrega = () => (
  <>
    <Form.Select
      data-testid="customer_checkout__select-seller"
      aria-label="Vendedor Responsável:"
    >
      <option>Vendedor</option>
    </Form.Select>
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
    <Button
      data-testid="customer_checkout__button-submit-order"
    >
      Finalizar Pedido
    </Button>
  </>
);

export default DetalhesEntrega;
