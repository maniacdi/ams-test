import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
const Header = ({ handleLogout }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <div className='header'>
      <Link to='/'>
        <h1 className='header__logo' title='home'>
          ¥E-com
        </h1>
      </Link>
      <ul className='header__list'>
        <li className={`header__item ${activeLink === '/' ? 'active' : ''}`}>
          <Link to='/'>Home</Link>
        </li>
        <li
          className={`header__item ${activeLink === '/items' ? 'active' : ''}`}
        >
          <Link to='/products'>Products</Link>
        </li>
      </ul>
      <div className='header_right'>
        <FaShoppingCart className='header__link icon cart' title='cart' />
        <span onClick={handleLogout} className='header__link' title='logout'>
          <FiLogOut className='header__link icon logout' />
        </span>
      </div>
    </div>
  );
};
export default Header;
