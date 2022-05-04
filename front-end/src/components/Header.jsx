import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/costumer/products">Produtos</Nav.Link>
              <Nav.Link href="/costumer/orders">Meus pedidos</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Fulano de tal</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Sair
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;