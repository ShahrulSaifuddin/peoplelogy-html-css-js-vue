import { Container, Nav, Navbar } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" className="" id="navbar">
      <Container
        fluid
        style={{ backgroundColor: 'transparent', letterSpacing: '1px' }}
      >
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#top-product">Top Products</Nav.Link>
            <Nav.Link href="#brands">Brands</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
