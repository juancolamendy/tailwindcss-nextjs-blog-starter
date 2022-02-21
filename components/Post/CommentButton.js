import React from 'react';
import PropTypes from 'prop-types';

const CommentButton = ({ onClick }) => {
  return (
  <button 
    className="text-center text-gray-700 link-text rounded-md border-2 border-gray-100 py-4 px-2 w-30"
    onClick={onClick}>
    Load Comments ...
  </button>
  );
};

CommentButton.propTypes = {
  onClick: PropTypes.func,
};

export default CommentButton;
