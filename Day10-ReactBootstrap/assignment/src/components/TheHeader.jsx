import { Container, Image } from 'react-bootstrap';

function TheHeader() {
  return (
    <Container className="d-flex justify-content-between align-items-center p-3">
      <div className="d-flex gap-2">
        <a href="">
          <Image
            src="../../public/images/ig.png"
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
            src="../../public/images/fb.png"
            fluid
            className="bg-transparent"
            style={{ width: '30px' }}
          />
        </a>
      </div>
      <h1>FURNITURE</h1>
      <div className="d-flex gap-2">
        <a href="">
          <Image
            src="../../public/images/search.png"
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
            src="../../public/images/shopping-cart.png"
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
