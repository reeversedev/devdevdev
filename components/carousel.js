import React from 'react';

const Carousel = () => {
  return (
    <div className="d-flex flex-column carousel">
      <div className="main-box"></div>
      <div className="d-flex">
        {[1, 2, 3, 4].map((carousel) => {
          return <div key={carousel} className="option-box"></div>;
        })}
      </div>
    </div>
  );
};

export default Carousel;
