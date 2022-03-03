import React from 'react';
import PropTypes from 'prop-types';

const PostH4 = ({ id, children }) => {
  return (
  <h4 className="text-lg font-bold leading-5 text-gray-800 sm:text-xl my-4 sm:leading-6" id={id}>
    {children}
  </h4>
  );
};

PostH4.propTypes = {
  id: PropTypes.string,
	children: PropTypes.node
};

export default PostH4;
