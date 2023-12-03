import Brands from './components/Brands';
import Hero from './components/Hero';
import Navigation from './components/Navbar';

function App() {
  return (
    <>
      <div className="hero-container">
        <Navigation />
        <Hero />
      </div>
      <Brands />
    </>
  );
}

export default App;
