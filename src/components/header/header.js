import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.scss';
const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <h1 className='logo'>¥E-com</h1>
      </Link>
      <Link to='/'>Home</Link>
      <Link to='/items'>Items</Link>
      <FaShoppingCart className='icon cart' />
    </div>
  );
};
export default Header;
