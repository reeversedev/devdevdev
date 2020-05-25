import Header from './header'
import Toolbar from './toolbar'
import Cart from './cart'

import '../sass/pages/_app.scss'
import { useContext } from 'react'
import { CartContext } from '../pages'

const Layout = ({ children }) => {
  const {
    cart: { displayCart, view },
  } = useContext(CartContext)

  return (
    <div className="container">
      <Header />
      {children}
      {displayCart && (
        <div
          className={`${
            view === 'full' ? 'full-open' : 'half-open'
          } cart-container`}
        >
          <Cart />
        </div>
      )}
      <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between sticky-toolbar d-lg-none">
        <Toolbar buttons={['home', 'sort', 'filter']} />
      </div>
    </div>
  )
}

export default Layout
