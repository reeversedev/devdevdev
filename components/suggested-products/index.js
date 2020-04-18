import React from 'react';
import ProductCard from './ProductCard';

const SuggestedProducts = () => {
  return (
    <div className="suggested-products">
      <h2>Suggested Products</h2>
      <div className="products">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((card) => {
          return <ProductCard key={card} />;
        })}
      </div>
    </div>
  );
};

export default SuggestedProducts;
