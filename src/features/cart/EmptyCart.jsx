import { Link } from 'react-router-dom';
import LinkButton from '../../ui/LinkButton';


function EmptyCart() {
  return (
    <div className=' px-4 py-3'>
      <LinkButton to="/menu" type="secondary">&larr; Back to menu</LinkButton>
      {/* <Link to="/menu">&larr; Back to menu</Link> */}

      <p className='mt-8 font-semibold'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
