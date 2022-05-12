import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DeliveryContext from '../context/deliveryContext';

const HeaderSeller = () => {
  const { user } = useContext(DeliveryContext);
  const navigate = useNavigate();

  const logout = () => {
    // Necessário verificar essa função
    localStorage.removeItem('user');
    localStorage.removeItem('carShop');
    navigate('/login');
  };

  return (
    <Navbar expand="sm" bg="dark" variant="dark" className="pt-2 pb-2">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/seller/orders"
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

export default HeaderSeller;
