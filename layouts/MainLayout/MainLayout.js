import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => {
  return (
  <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
    {children}
  </div>
  );
};

MainLayout.propTypes = {
	children: PropTypes.node
};

export default MainLayout;
