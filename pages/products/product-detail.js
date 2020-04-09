import React from 'react';
import Layout from '../../components/layout';
import Carousel from '../../components/carousel';
import Detail from '../../components/detail';

const ProductDetail = () => {
  return (
    <Layout>
      <div className="d-flex flex-sm-column">
        <div className="w-50 w-sm-100">
          <Carousel />
        </div>
        <div className="w-40 w-md-50 w-sm-100">
          <Detail />
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
