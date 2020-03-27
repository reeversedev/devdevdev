import React from 'react';
import flash from '../icons/flash.svg';

const Newin = () => {
  return (
    <div className="newin">
      <div className="d-flex align-items-center">
        <img src={flash} alt="icon" height="25" /> <h1>New In</h1>
      </div>
      <div className="d-grid">
        <div className="w-40">
          <div className="category-card align-items-center text-center">
            GET UPTO 50% OFF
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newin;
