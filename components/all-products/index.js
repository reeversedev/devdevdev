import { useEffect, useState } from 'react'
import ProductCard from '../suggested-products/ProductCard'
import { useRouter } from 'next/router'

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
  }, [slug])

  return (
    <div className="d-flex flex-wrap justify-content-between">
      {loading && <p>Loading...</p>}
      {products.length > 0 &&
        products.map((product) => {
          return <ProductCard {...product} key={product.id} type={slug} />
        })}
    </div>
  )
}

export default AllProducts
