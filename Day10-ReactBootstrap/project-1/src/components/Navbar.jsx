import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar expand="md" className="bg-transparent" variant="dark">
      <Container>
        <Navbar.Brand href="#home" id="nav-link-item">
          ARSHA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav-link-item" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" id="nav-link-item">
              Home
            </Nav.Link>
            <Nav.Link href="#about" id="nav-link-item">
              About
            </Nav.Link>
            <Nav.Link href="#services" id="nav-link-item">
              Services
            </Nav.Link>

            <Nav.Link href="#portfolio" id="nav-link-item">
              Portfolio
            </Nav.Link>

            <Nav.Link href="#seams" id="nav-link-item">
              Teams
            </Nav.Link>

            <NavDropdown title="Drop Down" id="nav-link-item">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" id="nav-link-item">
              Contact
            </Nav.Link>
            <Button variant="outline-info" className="rounded-5 text-white">
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
