import React, { useContext } from 'react'
import { products } from '../utils/products'
import { CartContext } from '../pages'
import { fullviewCart, openCart } from '../utils/actions'

const Cart = () => {
  const {
    cart: { view },
    setCart,
  } = useContext(CartContext)
  return (
    <div className="cart">
      <div className="cart-header d-flex justify-content-between">
        <h1>My Cart</h1>
        {view === 'half' && (
          <img
            src="/fullscreen.svg"
            alt=""
            width="30"
            onClick={() => setCart(fullviewCart())}
            className="cursor-pointer"
          />
        )}
        {view === 'full' && (
          <img
            src="/fullscreen-exit.svg"
            alt=""
            width="30"
            onClick={() => setCart(openCart())}
            className="cursor-pointer"
          />
        )}
      </div>
      <div className="cart-items-container">
        <div className="items">
          {products.clothing.map((cloth, index) => {
            return (
              <div className="item" key={index}>
                <div className="w-20">
                  <img src={cloth.image} alt={cloth.name} loading="lazy" />
                </div>
                <div className="description w-100">
                  <p className="brand">{cloth.brand}</p>
                  <p className="name">{cloth.name}</p>
                </div>
                <div className="d-flex flex-column w-20 p-1">
                  <p className="price">
                    {cloth.priceCurrency} {cloth.price}
                  </p>
                  <div className="quantity">
                    <div className="button-group">
                      <button className="minus">-</button>
                      <span>2</span>
                      <button className="plus">+</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="cart-footer">
        <button className="transaction buynow mt-2">Checkout</button>
      </div>
    </div>
  )
}

export default Cart
