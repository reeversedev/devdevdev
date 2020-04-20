import React from 'react';

const Newin = () => {
  return (
    <div className="d-flex flex-md-column flex-sm-column highlights">
      <div className="w-50 w-md-100 w-sm-100 p-1 p-sm-0">
        <section className="vertical-section">
          <div className="category-horizontal-card cyan-background align-items-center text-center font-weight-800 font-size-22">
            GET UPTO 50% OFF
          </div>
          <div className="category-horizontal-card purple-background">
            <div className="m-2">
              <p className="font-weight-700 font-size-22">Winter Weekends</p>
              <p className="font-weight-300 font-size-14">Keep it casual</p>
            </div>
          </div>
        </section>
        <section className="horizontal-section my-2">
          <div className="category-vertical-card scarves">
            <p>Blanket scarf in orange and black brushed check with tassels</p>
          </div>
          <div className="category-vertical-card adidas">
            <p>Adidas Originals LXCON 94 trainers in white</p>
          </div>
        </section>
      </div>

      <div className="w-50 w-md-100 w-sm-100 p-1 p-sm-0">
        <div className="d-flex flex-column flex-sm-column">
          <section className="horizontal-section">
            <div className="category-vertical-card adidas">
              <p>Adidas Originals LXCON 94 trainers in white</p>
            </div>
            <div className="category-vertical-card sneakers">
              <p>Lightweight super skinny joggers in light khaki</p>
            </div>
          </section>
          <section className="vertical-section my-2">
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
                <p className="font-weight-300 font-size-14">Change is here</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Newin;
