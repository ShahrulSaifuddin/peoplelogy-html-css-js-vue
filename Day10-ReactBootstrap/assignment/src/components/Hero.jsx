import Navigation from './Navigation';
import { Button, Container } from 'react-bootstrap';

function Hero() {
  return (
    <section>
      <Navigation />
      <Container className="d-flex align-items-center text-white">
        <div>
          <h1>Make Your Home</h1>
          <h1>Modern Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non
            hic velit quos molestias architecto iure quod sapiente, commodi
            corporis?
          </p>
          <Button variant="outline-light">Shop Now</Button>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
