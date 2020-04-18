import React, { useEffect } from 'react';
import Layout from '../../components/layout';
import Explore, { exploreItems } from '../../components/explore';
import Router, { useRouter } from 'next/router';

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
    return <p>Loading...</p>;
  }

  const { name, icon } = exploreItems.filter((item) => item.slug === slug)[0];

  return (
    <Layout>
      <div className="homepage">
        <div className="w-20">
          <Explore />
        </div>
        <div className="w-100">
          <div className="newin">
            <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between sticky-toolbar">
              <div className="d-flex align-items-center">
                <img src={icon} alt="icon" height="35" />{' '}
                <h1 className="mx-1">{name}</h1>
              </div>
              <div className="d-flex justify-content-between align-items-center toolbar">
                <button className="toolbar-button female">
                  <span className="icon"></span>{' '}
                  <span className="content">Female</span>
                </button>

                <button className="toolbar-button male">
                  <span className="icon"></span>{' '}
                  <span className="content">Male</span>{' '}
                </button>

                <button className="toolbar-button sort">
                  <span className="icon"></span>{' '}
                  <span className="content">Sort</span>{' '}
                </button>

                <button className="toolbar-button filter">
                  <span className="icon">5</span>{' '}
                  <span className="content">Filter</span>
                </button>
              </div>
            </div>
            <div className="d-flex flex-md-column flex-sm-column highlights">
              <div className="w-50 w-md-100 w-sm-100 p-1 p-sm-0">
                <section className="vertical-section my-2">
                  <div className="category-horizontal-card cyan-background align-items-center text-center font-weight-800 font-size-22">
                    GET UPTO 50% OFF
                  </div>
                  <div className="category-horizontal-card purple-background">
                    <div className="m-2">
                      <p className="font-weight-700 font-size-22">
                        Winter Weekends
                      </p>
                      <p className="font-weight-300 font-size-14">
                        Keep it casual
                      </p>
                    </div>
                  </div>
                </section>
                <section className="horizontal-section">
                  <div className="category-vertical-card scarves">
                    <p>
                      Blanket scarf in orange and black brushed check with
                      tassels
                    </p>
                  </div>
                  <div className="category-vertical-card adidas">
                    <p>Adidas Originals LXCON 94 trainers in white</p>
                  </div>
                </section>
              </div>

              <div className="w-50 w-md-100 w-sm-100 p-1 p-sm-0">
                <div className="d-flex flex-column flex-sm-column">
                  <section className="horizontal-section my-2">
                    <div className="category-vertical-card adidas">
                      <p>Adidas Originals LXCON 94 trainers in white</p>
                    </div>
                    <div className="category-vertical-card sneakers">
                      <p>Lightweight super skinny joggers in light khaki</p>
                    </div>
                  </section>
                  <section className="vertical-section">
                    <div className="category-horizontal-card yellow-background">
                      <div className="d-flex flex-column m-2">
                        <span className="font-weight-700 font-size-22">
                          New-In Knitwear
                        </span>
                        <span className="font-weight-300 font-size-14">
                          Layers.On.Layers
                        </span>
                      </div>
                    </div>
                    <div className="category-horizontal-card pink-background">
                      <div className="m-2">
                        <p className="font-weight-700 font-size-22">
                          New-Season Textures
                        </p>
                        <p className="font-weight-300 font-size-14">
                          Change is here
                        </p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
