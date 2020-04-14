import React from 'react';
import flash from '../icons/flash.svg';

const Newin = () => {
  return (
    <div className="newin">
      <div className="d-flex flex-sm-column align-items-center align-items-sm-start justify-content-between sticky-toolbar">
        <div className="d-flex align-items-center">
          <img src={flash} alt="icon" height="35" /> <h1>New In</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center toolbar">
          <button className="toolbar-button female">
            <span className="icon"></span>{' '}
            <span className="content">Female</span>
          </button>

          <button className="toolbar-button male">
            <span className="icon"></span> <span className="content">Male</span>{' '}
          </button>

          <button className="toolbar-button sort">
            <span className="icon"></span> <span className="content">Sort</span>{' '}
          </button>

          <button className="toolbar-button filter">
            <span className="icon">5</span>{' '}
            <span className="content">Filter</span>
          </button>
        </div>
      </div>
      <div className="d-flex flex-md-column flex-sm-column highlights">
        <div className="w-50 w-md-100 w-sm-100 p-1">
          <section className="vertical-section my-2">
            <div className="category-horizontal-card cyan-background align-items-center text-center font-weight-800 font-size-22 m-sm-0 my-sm-2">
              GET UPTO 50% OFF
            </div>
            <div className="category-horizontal-card purple-background m-sm-0 my-sm-2">
              <div className="m-2">
                <p className="font-weight-700 font-size-22">Winter Weekends</p>
                <p className="font-weight-300 font-size-14">Keep it casual</p>
              </div>
            </div>
          </section>
          <section className="horizontal-section">
            <div className="category-vertical-card m-sm-0 my-sm-2 scarves">
              <p>
                Blanket scarf in orange and black brushed check with tassels
              </p>
            </div>
            <div className="category-vertical-card m-sm-0 my-sm-2 adidas">
              <p>Adidas Originals LXCON 94 trainers in white</p>
            </div>
          </section>
        </div>

        <div className="w-50 w-md-100 w-sm-100 p-1">
          <div className="d-flex flex-column flex-sm-column">
            <section className="horizontal-section my-2">
              <div className="category-vertical-card m-sm-0 my-sm-2 adidas">
                <p>Adidas Originals LXCON 94 trainers in white</p>
              </div>
              <div className="category-vertical-card m-sm-0 my-sm-2 sneakers">
                <p>Lightweight super skinny joggers in light khaki</p>
              </div>
            </section>
            <section className="vertical-section">
              <div className="category-horizontal-card yellow-background m-sm-0 my-sm-2">
                <div className="d-flex flex-column m-2">
                  <span className="font-weight-700 font-size-22">
                    New-In Knitwear
                  </span>
                  <span className="font-weight-300 font-size-14">
                    Layers.On.Layers
                  </span>
                </div>
              </div>
              <div className="category-horizontal-card pink-background m-sm-0 my-sm-2">
                <div className="m-2">
                  <p className="font-weight-700 font-size-22">
                    New-Season Textures
                  </p>
                  <p className="font-weight-300 font-size-14">Change is here</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newin;
