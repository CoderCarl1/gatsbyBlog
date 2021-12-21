import * as React from 'react';
const { useState, useEffect } = React;
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import '../styles/nav.scss';
import { useWindowDimensions } from '../utils/useWindowDimensions';

export const Navbar = () => {
  const [menuState, setMenuState] = useState(false);
  const { width } = useWindowDimensions();
  const [active, setActive] = useState('/');
  const location = useLocation();

  const handleMenu = () => {
    if (width <= 720) {
      setMenuState(!menuState);
    }
  };

  const handleNavClick = (route) => {
    if (route === active) {
      setMenuState(false);
      console.log('it happened');
    }
  };

  useEffect(() => {
    if (menuState === true) {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [menuState]);
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  useEffect(() => {
    if (width > 720 && menuState === true) {
      setMenuState(false);
    }
  }, [width]);

  return (
    <header className="header container">
      <div className="mob-wrapper">
        {menuState && (
          <Link to="/">
            <div className={menuState ? 'fade-in logo' : 'logo '}>
              <span className="sr-only">Home</span>
            </div>
          </Link>
        )}

        <button
          className="nav--hamburger"
          onClick={handleMenu}
          aria-controls="primary-navigation"
          aria-expanded={menuState ? 'true' : 'false'}
        >
          <span className="sr-only">Menu</span>
        </button>
      </div>
      <nav
        className={menuState ? 'open nav' : width <= 720 ? 'closed nav' : 'nav'}
      >
        <ul id="primary-navigation" className="nav--list">
          <li
            className={
              active === '/'
                ? 'active nav--list__item link-nav'
                : 'nav--list__item link-nav'
            }
          >
            <Link
              to="/"
              onClick={() => handleNavClick('/')}
              className="nav--list__item__link"
            >
              Home
            </Link>
          </li>
          <li
            className={
              active === '/about'
                ? 'active nav--list__item link-nav'
                : 'nav--list__item link-nav'
            }
          >
            <Link
              to="/about"
              onClick={() => handleNavClick('/about')}
              className="nav--list__item__link"
            >
              About
            </Link>
          </li>
          <li
            className={
              active === '/blogs'
                ? 'active nav--list__item link-nav'
                : 'nav--list__item link-nav'
            }
          >
            <Link
              to="/blogs"
              onClick={() => handleNavClick('/blogs')}
              className="nav--list__item__link"
            >
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
