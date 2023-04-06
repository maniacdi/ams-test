import { FaShoppingCart } from 'react-icons/fa';
import './CartIcon.scss';
const CartIcon = () => {
  return (
    <div className='header'>
      <FaShoppingCart className='menu menu--link  icon cart' />
    </div>
  );
};
export default CartIcon;
