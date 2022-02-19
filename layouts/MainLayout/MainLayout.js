import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const MainLayout = ({children}) => {
  return (
  <div className="flex flex-col justify-between h-screen">
    <Header />
    {children}
    <Footer />
  </div>
  );
};

MainLayout.propTypes = {
	children: PropTypes.node
};

export default MainLayout;
