import { useContext } from 'react';

import Header from './header';
import Toolbar from './toolbar';
import Cart from './cart';

import '../sass/pages/_app.scss';
import { CartContext } from '../utils/CartContext';

const Layout = (props) => {
  const { cart, setCart } = useContext(CartContext);
  console.log('cart', cart);

  return (
    <div className="container">
      <Header />
      {props.children}
      <div className="cart-container">
        <Cart />
      </div>
      <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between sticky-toolbar d-lg-none">
        <Toolbar buttons={['home', 'sort', 'filter']} />
      </div>
    </div>
  );
};

export default Layout;
