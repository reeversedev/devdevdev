import React from 'react';
import ProductCard from '../suggested-products/ProductCard';

const AllProducts = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((product) => {
        return <ProductCard />;
      })}
    </div>
  );
};

export default AllProducts;
