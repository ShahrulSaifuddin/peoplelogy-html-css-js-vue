import { Container, Nav, Navbar } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="lg" className="" id="navbar">
      <Container
        fluid
        style={{ backgroundColor: 'transparent', letterSpacing: '1px' }}
      >
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="ms-auto"
          id="nav-toggle"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" id="link-item">
              Home
            </Nav.Link>
            <Nav.Link href="#service" id="link-item">
              Service
            </Nav.Link>
            <Nav.Link href="#shop" id="link-item">
              Shop
            </Nav.Link>
            <Nav.Link href="#top-product" id="link-item">
              Top Products
            </Nav.Link>
            <Nav.Link href="#brands" id="link-item">
              Brands
            </Nav.Link>
            <Nav.Link href="#contact" id="link-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
