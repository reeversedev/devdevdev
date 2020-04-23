import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import Explore, { exploreItems } from '../../components/explore';
import Router, { useRouter } from 'next/router';
import Newin from '../../components/newin';
import Toolbar from '../../components/toolbar';
import AllProducts from '../../components/all-products';

const Category = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/') {
      Router.push('/category/new-in');
    }
  });
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) {
    return (
      <div className="homepage justify-content-center align-items-center">
        <p>Loading...</p>
      </div>
    );
  }

  const { name, icon } = exploreItems.filter((item) => item.slug === slug)[0];

  return (
    <Layout>
      <div className="homepage">
        <div className="w-20 w-sm-100">
          <Explore />
        </div>
        <div className="w-100 position-relative">
          <div className="category">
            <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between sticky-toolbar d-sm-none">
              <div className="d-flex align-items-center">
                <img src={icon} alt="icon" height="35" />{' '}
                <h1 className="mx-1">{name}</h1>
              </div>
              <Toolbar buttons={['female', 'male', 'sort', 'filter']} />
            </div>
            <div className="content">
              {slug === 'new-in' ? <Newin /> : <AllProducts slug={slug} />}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
