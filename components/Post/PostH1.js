import React from 'react';
import PropTypes from 'prop-types';

const PostH1 = ({ id, children }) => {
  return (
  <h1 className="my-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14" id={id}>
    {children}
  </h1>
  );
};

PostH1.propTypes = {
  id: PropTypes.string,
	children: PropTypes.node
};

export default PostH1;
