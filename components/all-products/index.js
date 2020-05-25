import React from 'react'
import ProductCard from '../suggested-products/ProductCard'
import { products } from '../../utils/products'

const AllProducts = ({ slug }) => {
  console.log('SLUG', slug)
  return (
    <div className="d-flex flex-wrap justify-content-between">
      {products[slug].map((product, index) => {
        return <ProductCard {...product} index={index} type={slug} />
      })}
    </div>
  )
}

export default AllProducts
