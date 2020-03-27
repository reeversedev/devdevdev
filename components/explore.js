import React from 'react';
import flash from '../icons/flash.svg';

const Explore = () => {
  return (
    <div className="explore">
      <h1>Explore</h1>
      <ul>
        {[
          'New In',
          'Clothing',
          'Shoes',
          'Accessories',
          'Activewear',
          'Gifts & Living',
          'Inspiration'
        ].map(li => {
          return (
            <li>
              <a className="d-flex align-items-center">
                <img src={flash} alt="icon" height="20" /> <span>{li}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Explore;
