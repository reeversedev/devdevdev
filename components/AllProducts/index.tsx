import { useEffect, useState } from 'react'
import ProductCard from '../SuggestedProducts/ProductCard'
import Loader from '../Loader'

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
    <div className="d-flex flex-wrap justify-content-between align-items-center">
      {loading && <Loader />}
      {products.length > 0 &&
        products.map((product) => {
          return <ProductCard {...product} key={product.id} type={slug} />
        })}
    </div>
  )
}

export default AllProducts
