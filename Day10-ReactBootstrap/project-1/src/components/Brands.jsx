import { Container, Row, Col } from 'react-bootstrap';

function Brands() {
  return (
    <Container fluid style={{ height: '100px' }} className="text-bg-light">
      <Row className="h-100 d-flex justtify-content-betweens align-items-center text-center">
        <Col className="brandName">myob</Col>
        <Col className="brandName">BELIMO</Col>
        <Col className="brandName">LifeGroups</Col>
        <Col className="brandName">Lilly</Col>
        <Col className="brandName">citrus</Col>
        <Col className="brandName">Trustly</Col>
      </Row>
    </Container>
  );
}

export default Brands;
