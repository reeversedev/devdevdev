import React from 'react';
import { products } from '../utils/products';

const Cart = () => {
  return (
    <div className="cart">
      <h1>My Cart</h1>
      <div className="items">
        {products.clothing.map((cloth, index) => {
          return (
            <div className="item" key={index}>
              <div className="w-40">
                <img src={cloth.image} alt={cloth.name} />
              </div>
              <div className="description w-60">
                <p className="brand">{cloth.brand}</p>
                <p className="name">{cloth.name}</p>
              </div>
              <div className="d-flex flex-column w-30">
                <p className="quantity">2</p>
                <p className="price">
                  {cloth.priceCurrency} {cloth.price}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <button className="transaction buynow mt-2">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;
