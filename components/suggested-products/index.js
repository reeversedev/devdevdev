import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../../utils/products';

const SuggestedProducts = () => {
  return (
    <div className="suggested-products">
      <h2>Suggested Products</h2>
      <div className="products">
        {products.map((card) => {
          return <ProductCard key={card.name} {...card} />;
        })}
      </div>
    </div>
  );
};

export default SuggestedProducts;
