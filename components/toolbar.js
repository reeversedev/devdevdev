import React from 'react';

const Toolbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center toolbar">
      <button className="toolbar-button female">
        <span className="icon"></span> <span className="content">Female</span>
      </button>

      <button className="toolbar-button male">
        <span className="icon"></span> <span className="content">Male</span>{' '}
      </button>

      <button className="toolbar-button sort">
        <span className="icon"></span> <span className="content">Sort</span>{' '}
      </button>

      <button className="toolbar-button filter">
        <span className="icon">5</span> <span className="content">Filter</span>
      </button>
    </div>
  );
};

export default Toolbar;
