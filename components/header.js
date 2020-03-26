import React from 'react';

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1>DEV 3</h1>
      <input
        type="text"
        placeholder="Search for awesome essentials..."
        className="p-1 search-bar no-border"
      />
      <div className="d-flex">
        <span>Cart:</span>
        <span>2</span>
      </div>
      <div className="d-flex">
        <p>Hello Mr. Coleman</p>
      </div>
    </div>
  );
};

export default Header;
