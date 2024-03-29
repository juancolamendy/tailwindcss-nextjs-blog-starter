import React from 'react';
import PropTypes from 'prop-types';

const H4 = ({ id, children }) => {
  return (
  <h4 className="text-lg sm:text-xl font-medium leading-5 text-gray-800 my-4 sm:leading-6" id={id}>
    {children}
  </h4>
  );
};

H4.propTypes = {
  id: PropTypes.string,
	children: PropTypes.node
};

export default H4;
