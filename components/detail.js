import React, { useState } from 'react';

const Detail = () => {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="d-flex flex-column detail">
      <div className="detail-panel">
        <h2 className="m-0">507 adidas D` Artagnan II</h2>
        <p className="name">
          Men Blue & Black Nite Jogger Colourblocked Sneakers
        </p>
        <p className="product-id">ID: 250900097</p>
        <div className="d-flex price-panel">
          <p className="price-tag">$88.67</p>
        </div>
        <hr className="my-2" />
        <div className="d-flex justify-content-between align-items-center">
          <button className="transaction buynow">Buy now</button>
          <div className="button-group">
            <button className="minus">-</button>
            <span>{quantity}</span>
            <button className="plus">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
