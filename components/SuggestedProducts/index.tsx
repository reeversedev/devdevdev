import React from 'react'
import ProductCard from './ProductCard'
import { products } from '../../utils/products'

const SuggestedProducts = ({ category }) => {
  return (
    <div className="suggested-products">
      <h2>Suggested Products</h2>
      <div className="products">
        {products[category].map((card, index) => {
          return (
            <ProductCard key={card.name} {...card} type={category} id={index} />
          )
        })}
      </div>
    </div>
  )
}

export default SuggestedProducts
