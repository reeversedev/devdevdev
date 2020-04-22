import React from 'react';
import ProductCard from '../suggested-products/ProductCard';
import { products } from '../../utils/products';

const AllProducts = () => {
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {products.map((product) => {
        return <ProductCard {...product} />;
      })}
    </div>
  );
};

export default AllProducts;
