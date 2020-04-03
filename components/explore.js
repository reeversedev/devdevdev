import React from 'react';
import flash from '../icons/flash.svg';
import clothing from '../icons/tshirt.svg';
import shoes from '../icons/shoes.svg';
import accessories from '../icons/earrings.svg';
import activewear from '../icons/activewear.svg';
import inspiration from '../icons/inspiration.svg';

const Explore = () => {
  return (
    <div className="explore">
      <h1>Explore</h1>
      <div className="d-flex flex-wrap">
        <ul>
          {[
            { name: 'New In', icon: flash },
            { name: 'Clothing', icon: clothing },
            { name: 'Shoes', icon: shoes },
            { name: 'Accessories', icon: accessories },
            { name: 'Activewear', icon: activewear },
            { name: 'Inspiration', icon: inspiration }
          ].map(({ name, icon }) => {
            return (
              <li key={name}>
                <a className="d-flex align-items-center">
                  <img src={icon} alt="icon" height="25" /> <span>{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Explore;
