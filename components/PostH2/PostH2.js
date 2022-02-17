import React from 'react';
import PropTypes from 'prop-types';

const PostH2 = ({ id, children }) => {
  return (
  <h2 className="text-xl font-bold leading-9 text-gray-800 sm:text-2xl sm:leading-10 md:text-3xl" id={id}>
    {children}
  </h2>
  );
};

PostH2.propTypes = {
  id: PropTypes.string,
	children: PropTypes.node
};

export default PostH2;
