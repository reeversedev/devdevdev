import React from 'react';
import logo from '../icons/logo.svg';

const Header = () => {
  return (
    <div className="d-flex flex-sm-column justify-content-between align-items-center header">
      <div className="logo">
        <img src={logo} />
      </div>

      <label className="search-bar">
        <input
          type="text"
          placeholder="Search for awesome essentials..."
          className="no-border"
        />
      </label>

      <div className="d-flex justify-content-between align-items-center d-sm-none">
        <img
          src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
          alt=""
          height="16"
          className="cart"
        />
        <span>Cart: </span>
        <span>2</span>
      </div>
      <div className="d-flex d-sm-none">
        <div className="hello-name">
          <img
            src="https://pbs.twimg.com/profile_images/1239922488160575489/_Ykuf9DR_400x400.jpg"
            alt="Profile Picture"
            height="30"
          />
          <span>
            Hello, <b>Mr. Prateek</b>
          </span>
          <div className="profile-menu">
            <ul>
              {['My Account', 'My Orders', 'Settings', 'Sign out'].map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
