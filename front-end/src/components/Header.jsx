import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DeliveryContext from '../context/deliveryContext';

const Header = () => {
  const { user } = useContext(DeliveryContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <Navbar expand="sm" bg="dark" variant="dark" className="pt-2 pb-2">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/customer/products"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Nav.Link>
            <Nav.Link
              href="/customer/orders"
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
              onClick={ logout }
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
