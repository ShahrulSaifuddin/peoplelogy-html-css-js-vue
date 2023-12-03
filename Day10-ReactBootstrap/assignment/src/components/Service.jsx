import { Container, Button, Card } from 'react-bootstrap';

function Service() {
  return (
    <Container id="service" style={{ minHeight: '100vh' }} className="py-5">
      <h1 className="text-center pb-5">Service We Offer</h1>
      <Container className="d-flex flex-wrap justify-content-around gap-5">
        <Card
          style={{ width: '22rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" src="../../public/images/c1.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium delectus animi perferendis magni pariatur aspernatur
              laborum ducimus recusandae et qui?
            </Card.Text>
            <Button variant="outline-dark">View More</Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '22rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white shadow-lg p-4 mb-4"
          id="card-body"
        >
          <Card.Img variant="top" src="../../public/images/c2.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium delectus animi perferendis magni pariatur aspernatur
              laborum ducimus recusandae et qui?
            </Card.Text>
            <Button variant="outline-dark">View More</Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '22rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" src="../../public/images/c3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium delectus animi perferendis magni pariatur aspernatur
              laborum ducimus recusandae et qui?
            </Card.Text>
            <Button variant="outline-dark">View More</Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '22rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" src="../../public/images/c1.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium delectus animi perferendis magni pariatur aspernatur
              laborum ducimus recusandae et qui?
            </Card.Text>
            <Button variant="outline-dark">View More</Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '22rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" src="../../public/images/c1.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium delectus animi perferendis magni pariatur aspernatur
              laborum ducimus recusandae et qui?
            </Card.Text>
            <Button variant="outline-dark">View More</Button>
          </Card.Body>
        </Card>
        <Card
          style={{ width: '22rem' }}
          className="text-center shadow-lg p-4 mb-4 bg-white"
          id="card-body"
        >
          <Card.Img variant="top" src="../../public/images/c1.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium delectus animi perferendis magni pariatur aspernatur
              laborum ducimus recusandae et qui?
            </Card.Text>
            <Button variant="outline-dark">View More</Button>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default Service;
