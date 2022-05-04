import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import DeliveryContext from '../context/deliveryContext';

const Header = () => {
  const { user } = useContext(DeliveryContext);

  return (
    <Navbar expand="sm" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/costumer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Nav.Link>
            <Nav.Link
              href="/costumer/orders"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Meus pedidos
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              data-testid="customer_products__element-navbar-user-full-name"
            >
              { user.name }
            </Nav.Link>
            <Nav.Link
              data-testid="customer_products__element-navbar-link-logout"
            >
              Sair
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
