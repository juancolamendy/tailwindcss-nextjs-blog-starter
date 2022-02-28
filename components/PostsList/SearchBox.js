import React from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ onChange }) => {
  return (
  <div className="relative max-w-lg">
    <input
      aria-label="Search"
      type="text"
      onChange={onChange}
      placeholder="Search"
      className="block blog-input"
    />
    <svg
      className="absolute right-3 top-3 h-5 w-5 text-primary-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  </div>    
  );
};

SearchBox.propTypes = {
  onChange: PropTypes.func,
};

export default SearchBox;
