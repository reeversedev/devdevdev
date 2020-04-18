import React from 'react';
import Explore from './explore';
import Category from '../pages/category/[slug]';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="w-20">
        <Explore />
      </div>
      <div className="w-100">
        <Category />
      </div>
    </div>
  );
};

export default HomePage;
