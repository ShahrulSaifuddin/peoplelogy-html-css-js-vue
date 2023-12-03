import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { MdOutlinePlayCircleOutline } from 'react-icons/md';

function Hero() {
  return (
    <Container>
      <Row className="h-100 d-flex justtify-content-center align-items-center">
        <Col sm={12} md={6}>
          <h1 className="text-white">Better Solution For Your Business</h1>
          <p className="text-white mb-5">
            We are team of talented designers making websites with Bootstrap
          </p>
          <Button variant="info" className="rounded-5 text-white me-2">
            Get Started
          </Button>
          <Button
            variant="info"
            className="bg-transparent text-white"
            style={{ border: 'none', outline: 'none' }}
            id="nav-link-item"
          >
            <span>
              <MdOutlinePlayCircleOutline
                style={{ fontSize: '30px', marginRight: '3px' }}
              />
            </span>
            Watch Video
          </Button>
        </Col>
        <Col className="d-none d-md-block">
          <Image src="rb.gif" fluid className="bg-transparent" />
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
