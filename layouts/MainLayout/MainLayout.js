import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({children}) => {
  return (
  <div className="flex flex-col justify-between h-screen">
    <Header />
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <main className="mb-auto">{children}</main>
    </div>
    <Footer />
  </div>
  );
};

MainLayout.propTypes = {
	children: PropTypes.node
};

export default MainLayout;
