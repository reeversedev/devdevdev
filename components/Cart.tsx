import React, { useContext } from 'react'
import { products } from '../utils/products'
import { fullviewCart, openCart, closeCart } from '../utils/actions'
import { CartContext } from '../pages/_app'

const Cart = () => {
  const {
    cart: { view },
    setCart,
  } = useContext(CartContext)
  return (
    <div className="cart">
      <div className="cart-header d-flex justify-content-between align-items-center">
        <h1>My Cart</h1>
        <div className="d-flex align-items-center">
          <span
            className="cursor-pointer cart-icon cart-size"
            onClick={() =>
              view === 'half' ? setCart(fullviewCart()) : setCart(openCart())
            }
          ></span>
          <span
            className="cursor-pointer cart-icon close-icon"
            onClick={() => setCart(closeCart())}
          ></span>
        </div>
      </div>
      <div className="cart-items-container d-flex">
        <div className="items">
          {products.clothing.map((cloth, index) => {
            return (
              <div className="item align-items-center" key={index}>
                <div
                  className="w-20"
                  style={{
                    backgroundImage: `url('${cloth.image}')`,
                    backgroundSize: '100% 100%',
                    height: '150px',
                    width: '200px',
                    borderRadius: '15px',
                  }}
                ></div>
                <div className="description w-100">
                  <p className="brand">{cloth.brand}</p>
                  <p className="name">{cloth.name}</p>
                  <p className="volume">Size: XL • Color: White</p>
                </div>
                <div className="w-20">
                  <p className="price">&#8377; {cloth.price}</p>
                </div>
                <div className="d-flex flex-column w-20 p-1">
                  <div className="quantity">
                    <div className="button-group">
                      <button className="minus">-</button>
                      <span>2</span>
                      <button className="plus">+</button>
                    </div>
                  </div>
                </div>
                <div className="w-20">
                  <p className="price text-center">
                    &#8377; {parseFloat(cloth.price) * 2}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="cart-footer">
        {/* {products.clothing.reduce(
          (acc, { price }, i) => acc + parseInt(price) * 2,
          0
        )} */}
        <a className="transaction buynow text-uppercase">Checkout </a>
      </div>
    </div>
  )
}

export default Cart
