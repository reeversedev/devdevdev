import React from 'react';
import flash from '../icons/flash.svg';

const Newin = () => {
  return (
    <div className="newin">
      <div className="d-flex align-items-center">
        <img src={flash} alt="icon" height="25" /> <h1>New In</h1>
      </div>
      <div className="d-flex">
        <div className="w-50">
          <div className="category-horizontal-card cyan-background align-items-center text-center font-weight-800 font-size-22 m-1">
            GET UPTO 50% OFF
          </div>
          <div className="category-horizontal-card purple-background m-1">
            <div className="m-2">
              <p className="font-weight-700 font-size-22">Winter Weekends</p>
              <p className="font-weight-300 font-size-14">Keep it casual</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="w-50">
              <div className="category-vertical-card m-1">
                <p>Adidas Originals LXCON 94 trainers in white</p>
              </div>
            </div>
            <div className="w-50">
              <div className="category-vertical-card m-1">
                <p>Adidas Originals LXCON 94 trainers in white</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-50">
          <div className="d-flex">
            <div className="w-50">
              <div className="category-vertical-card m-1 adidas">
                <p>Adidas Originals LXCON 94 trainers in white</p>
              </div>
            </div>
            <div className="w-50">
              <div className="category-vertical-card m-1 sneakers">
                <p>Lightweight super skinny joggers in light khaki</p>
              </div>
            </div>
          </div>

          <div className="category-horizontal-card yellow-background m-1">
            <div className="d-flex flex-column m-2">
              <span className="font-weight-700 font-size-22">
                New-In Knitwear
              </span>
              <span className="font-weight-300 font-size-14">
                Layers.On.Layers
              </span>
            </div>
          </div>
          <div className="category-horizontal-card pink-background m-1">
            <div className="m-2">
              <p className="font-weight-700 font-size-22">
                New-Season Textures
              </p>
              <p className="font-weight-300 font-size-14">Change is here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newin;
