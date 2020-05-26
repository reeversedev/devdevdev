import Layout from '../../../components/layout'
import Carousel from '../../../components/carousel'
import Detail from '../../../components/detail'
import SuggestedProducts from '../../../components/suggested-products'

import { useRouter } from 'next/router'
import { products } from '../../../utils/products'

const ProductDetail = () => {
  const router = useRouter()
  console.log('dasdad', router)
  const { product } = router.query

  console.log('product', product)

  if (product) {
    const entry = product[0]
    const category = product[1]
    const product = products[category][entry]

    return (
      <Layout>
        <div className="d-flex flex-wrap flex-sm-column">
          <div className="w-50 w-sm-100">
            <Carousel {...product} />
          </div>
          <div className="w-40 w-md-50 w-sm-100">
            <Detail {...product} />
          </div>
          <div className="w-100">
            <SuggestedProducts category={category} />
          </div>
        </div>
      </Layout>
    )
  }
  // return <p>Loading... {router}</p>
}

export default ProductDetail
