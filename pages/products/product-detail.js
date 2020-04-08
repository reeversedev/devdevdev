import React from 'react';
import Layout from '../../components/layout';
import Carousel from '../../components/carousel';
import Detail from '../../components/detail';

const ProductDetail = () => {
  return (
    <Layout>
      <div className="d-flex">
        <div className="w-50 w-sm-100">
          <Carousel />
        </div>
        <div className="w-40">
          <Detail />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
