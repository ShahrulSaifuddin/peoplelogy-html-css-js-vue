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
        <Card style={{ width: '18rem' }} className="text-center">
          <Card.Img variant="top" src="../../public/images/card2.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="text-center">
          <Card.Img variant="top" src="../../public/images/card3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>{' '}
        <Card style={{ width: '18rem' }} className="text-center">
          <Card.Img variant="top" src="../../public/images/card4.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>{' '}
        <Card style={{ width: '18rem' }} className="text-center">
          <Card.Img variant="top" src="../../public/images/card5.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>{' '}
        <Card style={{ width: '18rem' }} className="text-center">
          <Card.Img variant="top" src="../../public/images/card6.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Price: $1000</Card.Text>
            <Button variant="outline-dark">Shop Now</Button>
          </Card.Body>
        </Card>{' '}
        <Card style={{ width: '18rem' }} className="text-center">
          <Card.Img variant="top" src="../../public/images/card7.png" />
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
