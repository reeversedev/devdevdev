import Layout from '../../../components/layout'
import Carousel from '../../../components/carousel'
import Detail from '../../../components/detail'
import SuggestedProducts from '../../../components/suggested-products'

import { useRouter } from 'next/router'
import { products } from '../../../utils/products'

function ProductDetail({ detail }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const entry = detail && detail[0]
  const category = detail && detail[1]
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

export async function getStaticProps(context) {
  const {
    params: { detail },
  } = context
  return {
    props: { detail }, // will be passed to the page component as props
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  }
}

export default ProductDetail
