import Layout from '../../../components/Layout'
import Detail from '../../../components/Detail'
import Carousel from '../../../components/Carousel'
import SuggestedProducts from '../../../components/suggested-products'

import { useRouter } from 'next/router'
import { products } from '../../../utils/products'

function ProductDetail({ product, category }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Layout>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <p>Loading...</p>
        </div>
      </Layout>
    )
  }

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

export async function getStaticProps(context) {
  const {
    params: { detail },
  } = context
  const entry = detail[0]
  const category = detail[1]
  const product = products[category][entry]
  return {
    props: { product, category },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export default ProductDetail
