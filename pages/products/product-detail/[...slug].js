import Layout from '../../../components/layout';
import Carousel from '../../../components/carousel';
import Detail from '../../../components/detail';
import SuggestedProducts from '../../../components/suggested-products';

import Router, { useRouter } from 'next/router';
import { products } from '../../../utils/products';

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  // console.log('detail slug', slug);

  if (slug) {
    const entry = slug && slug[0];
    const category = slug && slug[1];
    const product = products[category][entry];

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
    );
  }
  return <p>Loading...</p>;
};

export default ProductDetail;
