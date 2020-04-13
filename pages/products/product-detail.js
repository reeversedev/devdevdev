import React from 'react';
import Layout from '../../components/layout';
import Carousel from '../../components/carousel';
import Detail from '../../components/detail';
import SuggestedProducts from '../../components/suggested-products';

const ProductDetail = () => {
  return (
    <Layout>
      <div className="d-flex flex-wrap flex-sm-column">
        <div className="w-50 w-sm-100">
          <Carousel />
        </div>
        <div className="w-40 w-md-50 w-sm-100">
          <Detail />
        </div>
        <div className="w-100">
          <SuggestedProducts />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
