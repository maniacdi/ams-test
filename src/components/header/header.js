import { FaShoppingCart } from 'react-icons/fa';
import './Header.scss';
const Header = () => {
  return (
    <div className='header'>
      <h1>E-commerce Site</h1>
      <FaShoppingCart className='icon cart' />
    </div>
  );
};
export default Header;
