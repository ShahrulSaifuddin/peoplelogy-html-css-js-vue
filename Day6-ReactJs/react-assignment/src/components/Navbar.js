import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>home</Link>
        </li>
        <li>
          <Link to={'/services'}>services</Link>
        </li>
        <li>
          <Link to={'/project'}>project</Link>
        </li>
        <li>
          <Link to={'/about'}>about us</Link>
        </li>
        <li>
          <Link to={'/contact'}>contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
