import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

const Header = ({ handleLogout }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div className='header'>
      <div className='header-navBar'>
        <Link to='/'>
          <h1 className='header-logo' title='home'>
            ¥E-com
          </h1>
        </Link>
        <ul className='header-list'>
          <li className={`header-item ${activeLink === '/' ? 'active' : ''}`}>
            <Link to='/'>Home</Link>
          </li>
          <li
            className={`header-item ${
              activeLink === '/products' ? 'active' : ''
            }`}
          >
            <Link to='/products'>Products</Link>
          </li>
        </ul>
        <div className='header_right'>
          <FaShoppingCart className='header-link icon cart' title='cart' />
          <span onClick={handleLogout} className='header-link' title='logout'>
            <FiLogOut className='header-link icon logout' />
          </span>
        </div>
      </div>
      <div className='header-breadcrumbs'>
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default Header;
