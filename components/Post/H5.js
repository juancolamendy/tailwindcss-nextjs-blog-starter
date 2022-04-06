import React from 'react';
import PropTypes from 'prop-types';

const H5 = ({ id, children }) => {
  return (
  <h5 className="text-base font-bold leading-5 text-gray-800 sm:text-lg my-4 sm:leading-6" id={id}>
    {children}
  </h5>
  );
};

H5.propTypes = {
  id: PropTypes.string,
	children: PropTypes.node
};

export default H5;
