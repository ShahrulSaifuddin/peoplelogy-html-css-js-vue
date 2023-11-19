import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className="container">
        <ol>
          <li>
            <Link to={'/'}>home</Link>
          </li>
          <li>
            <Link to={'/service'}>services</Link>
          </li>
          <li>
            <Link to={'/about'}>about us</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
