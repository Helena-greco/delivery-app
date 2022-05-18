import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DeliveryContext from '../context/deliveryContext';

const HeaderAdmin = () => {
  const { user } = useContext(DeliveryContext);
  const navigate = useNavigate();

  const logout = () => {
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
              href="/admin/manage"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Gerenciar Usuários
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

export default HeaderAdmin;
