import { Container, Card } from 'react-bootstrap';

function Contact() {
  return (
    <Container
      fluid
      id="contact"
      style={{ height: '100vh' }}
      className="bg-light py-5"
    >
      <h1 className="text-center">Contact Us</h1>
      <Container className="d-flex justify-content-center align-items-center h-75">
        <Card
          style={{
            width: '90%',
            maxWidth: '500px',
            minHeight: '200px',
          }}
          className="text-center"
          id="card-body"
        >
          <Card.Body id="contact-body">
            <Card.Title>Megah Holding Berhads</Card.Title>
            <Card.Text>
              <p>Contact: 123-45-789</p>
              <p>Email: test@yahoo.com</p>
            </Card.Text>
            {/* <Card.Text></Card.Text> */}

            {/* <Button variant="outline-dark">Shop Now</Button> */}
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Contact;
