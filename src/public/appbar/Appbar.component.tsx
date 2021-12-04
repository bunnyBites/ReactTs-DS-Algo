import React from 'react';
import { Sidebar } from './sidebar/Sidebar.component';
import { Navbar, Container, Nav } from 'react-bootstrap';

export const Appbar: React.FC = () => {
  const prepareSidebarBody = () => (
    <Nav className="justify-content-end flex-grow-1 pe-3">
      <Nav.Link href="/bigo">Big O</Nav.Link>
    </Nav>
  );

  return (
    <Navbar bg="info" variant="dark" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#home">DS Algo</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          backdrop={false}
        >
          <Sidebar sidebarBody={prepareSidebarBody} />
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}