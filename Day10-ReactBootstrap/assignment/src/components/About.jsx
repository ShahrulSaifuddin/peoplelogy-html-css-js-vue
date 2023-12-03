import { Col, Container, Row, Image, Button } from 'react-bootstrap';

function About() {
  return (
    <Container id="contact" style={{ minHeight: '100vh' }} className="py-5">
      <h1 className="text-center pb-5">About Us</h1>
      <Row className="d-flex justify-content-between">
        <Col md={6}>
          <Image
            src="../../public/images/sf.png"
            fluid
            className="bg-transparent rounded-4"
          />
        </Col>
        <Col md={6}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            possimus voluptas commodi iure? Animi minus dolores error quia!
            Praesentium repellendus vitae, corrupti facilis odit recusandae, vel
            quia voluptas aperiam deserunt debitis expedita reprehenderit quo
            animi, ad est sapiente minima! Temporibus ipsam esse architecto
            quibusdam eaque id minus maxime tempore blanditiis aliquid
            consectetur repellendus iure iusto dolorum repudiandae natus
            laudantium voluptatum veniam, perferendis impedit animi dolorem.
            Iste porro ratione ad, odio veritatis laboriosam aspernatur ex sequi
            sint.
          </p>
          <Button variant="outline-dark">Shop Now</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
