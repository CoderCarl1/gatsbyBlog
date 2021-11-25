import * as React from 'react';
import { Link } from 'gatsby';
// import '../styles/nav.css';

export const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav">
        <ul className="nav--list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
