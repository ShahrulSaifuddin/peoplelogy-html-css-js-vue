import { Container, Button, Card } from 'react-bootstrap';

function Product() {
  return (
    <Container
      fluid
      id="top-product"
      style={{ minHeight: '100vh' }}
      className="bg-light py-5"
    >
      <h1 className="text-center pb-5">Trendy Products</h1>
      <Container className="d-flex flex-wrap justify-content-around gap-5">
        <Card
          style={{ width: '18rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" src="images/card2.png" id="card-img" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '18rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" id="card-img" src="images/card3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>{' '}
        <Card
          style={{ width: '18rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" id="card-img" src="images/card4.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>{' '}
        <Card
          style={{ width: '18rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" id="card-img" src="images/card5.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>{' '}
        <Card
          style={{ width: '18rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" id="card-img" src="images/card6.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>{' '}
        <Card
          style={{ width: '18rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" id="card-img" src="images/card7.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Product;
