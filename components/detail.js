import React, { useState } from 'react';

const specifications = [
  { heading: 'Type', description: 'Sneakers' },
  { heading: 'Toe Shape', description: 'Round Toe' },
  { heading: 'Pattern', description: 'Colourblocked' },
  { heading: 'Fastening', description: 'Lace-Ups' },
  { heading: 'Shoe Width', description: 'Wide' },
  { heading: 'Ankle Height', description: 'Regular' },
  { heading: 'Insole', description: 'Comfort Insole' },
  { heading: 'Sole Material', description: 'Rubber' },
  { heading: 'Micro Trend', description: 'Contrast Sole' },
  { heading: 'Warranty', description: '3 months' },
];

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
        <div className="d-flex justify-content-between align-items-center price-panel mt-2">
          <p className="price-tag m-0">$88.67</p>
          <div className="d-flex align-items-center justify-content-between">
            <span className="m-2">Sizes</span>
            <select>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
        </div>
        <hr className="my-2" />
        <div className="d-flex justify-content-between align-items-center">
          <button className="transaction add-to-cart">Add to Cart </button>
          {/* Will add this in Cart Menu */}
          {/* <button className="transaction buynow">Buy now </button> */}

          <div className="button-group">
            <button className="minus">-</button>
            <span>{quantity}</span>
            <button className="plus">+</button>
          </div>
        </div>
        <div className="d-flex flex-column mt-2">
          <h4>Product Details</h4>

          <section>
            <p className="font-weight-700">Special technologies</p>
            <p>Responsive Boost midsole Lightweight, supportive feel</p>
          </section>

          <section>
            <p className="font-weight-700">
              About ADIDAS Original Men Nite Jogger Sneakers
            </p>
            <p>
              The first Nite Jogger debuted in 1980, when recreational running
              was becoming popular. True to their origins, these shoes flash
              reflective details. Made of a mix of nylon, mesh and leather, they
              show off wintry silver hues. Boost cushioning adds a responsive,
              energy-returning feel.
            </p>
          </section>

          <section>
            <p className="font-weight-700">Product design details</p>
            <p>
              Main materials: mesh and synthetic upper/ textile lining/ rubber
              outsole Brand colour: -ROYBLU/GREONE/FTWWHT Lace-up closure
              Colourblocked upper Warranty: 3 months Warranty provided by brand/
              manufacturer
            </p>
          </section>

          <section>
            <p className="font-weight-700">Material & Care</p>
            <p>Mesh and synthetic Wipe with a clean, dry cloth when needed</p>
          </section>
          <section>
            <p className="font-weight-700">Specifications</p>
            <div className="d-flex flex-wrap justify-content-between">
              {specifications.map(({ heading, description }) => {
                return (
                  <div className="w-50">
                    <p className="font-size-12 font-weight-200 text-muted">
                      {heading}
                    </p>
                    <p className="font-weight-400">{description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Detail;
