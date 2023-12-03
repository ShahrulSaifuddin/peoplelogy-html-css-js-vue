import { Container, Image } from 'react-bootstrap';

function TheHeader() {
  return (
    <Container className="d-flex justify-content-between align-items-center p-3">
      <div className="social-icons">
        <a href="">
          <Image
            src="../../public/images/google-plus.png"
            fluid
            className="bg-transparent"
            style={{ width: '30px' }}
          />
        </a>
        <a href="">
          <Image
            src="../../public/images/google-plus.png"
            fluid
            className="bg-transparent"
            style={{ width: '30px' }}
          />
        </a>
        <a href="">
          <Image
            src="../../public/images/google-plus.png"
            fluid
            className="bg-transparent"
            style={{ width: '30px' }}
          />
        </a>
      </div>
      <h1>FURNITURE</h1>
      <div className="cart-icons">
        <a href="">
          <Image
            src="../../public/images/heart.png"
            fluid
            className="bg-transparent"
            style={{ width: '30px' }}
          />
        </a>
        <a href="">
          <Image
            src="../../public/images/heart.png"
            fluid
            className="bg-transparent"
            style={{ width: '30px' }}
          />
        </a>
        <a href="">
          <Image
            src="../../public/images/heart.png"
            fluid
            className="bg-transparent"
            style={{ width: '30px' }}
          />
        </a>
      </div>
    </Container>
  );
}

export default TheHeader;
