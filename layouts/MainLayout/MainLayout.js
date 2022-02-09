import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';

const MainLayout = ({children}) => {
  return (
  <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex h-screen flex-col justify-between">
    <Header />
    <main className="mb-auto">{children}</main>
  </div>
  );
};

MainLayout.propTypes = {
	children: PropTypes.node
};

export default MainLayout;
