import React, { useEffect, useState } from 'react'
import ProductCard from '../suggested-products/ProductCard'

const AllProducts = ({ slug }) => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`/api/products/${slug}`)
      .then((data) => data.json())
      .then(({ products }) => {
        setLoading(false)
        setProducts(products)
      })
  }, [])

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {loading && <p>Loading...</p>}
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div key={product.key}>
              <ProductCard {...product} type={slug} />
            </div>
          )
        })}
    </div>
  )
}

export default AllProducts
