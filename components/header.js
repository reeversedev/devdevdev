import Head from 'next/head';
import Link from 'next/link';

import logo from '../icons/logo.svg';

const Header = () => {
  return (
    <div className="d-flex flex-sm-column justify-content-between align-items-center header">
      <Head>
        <title>dev dev dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="logo d-sm-none">
        <Link href="/">
          <img src={logo} />
        </Link>
      </div>

      <label className="search-bar">
        <input
          type="text"
          placeholder="Search for awesome essentials..."
          className="no-border"
        />
      </label>

      <div className="d-flex justify-content-between align-items-center">
        <img
          src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
          alt=""
          height="16"
          className="cart"
        />
        <span>Cart: </span>
        <span>2</span>
      </div>
      <div className="d-flex w-sm-100">
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
              {['My Account', 'My Orders', 'Settings', 'Sign out'].map(
                (item) => (
                  <li key={item}>{item}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
