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
              <img src={cloth.image} alt={cloth.name} height="120" />
              <p>{cloth.name}</p>
              <p></p>
              <p className="quantity"></p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
