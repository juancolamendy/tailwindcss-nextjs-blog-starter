import React from 'react';
import PropTypes from 'prop-types';

const H3 = ({ id, children }) => {
  return (
  <h3 className="text-xl font-bold leading-7 text-gray-800 sm:text-2xl my-4 sm:leading-8" id={id}>
    {children}
  </h3>
  );
};

H3.propTypes = {
  id: PropTypes.string,
	children: PropTypes.node
};

export default H3;
