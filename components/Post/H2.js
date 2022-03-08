import React from 'react';
import PropTypes from 'prop-types';

const H2 = ({ id, children }) => {
  return (
  <h2 className="text-2xl font-bold leading-9 text-gray-800 sm:text-3xl my-4 sm:leading-10" id={id}>
    {children}
  </h2>
  );
};

H2.propTypes = {
  id: PropTypes.string,
	children: PropTypes.node
};

export default H2;