import React from 'react';
import Layout from '../../components/layout';
import Carousel from '../../components/carousel';

const ProductDetail = () => {
  return (
    <Layout>
      <div className="d-flex">
        <div className="w-100">
          <Carousel />
        </div>
        {/* <div className="w-40"></div> */}
      </div>
    </Layout>
  );
};

export default ProductDetail;
