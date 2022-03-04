import React from 'react';
import PropTypes from 'prop-types';

const ImageCredit = ({personRef, person, imageRef, imageSource}) => {
  return (
  <p>
    Photo 
    { person && (<span>by <a target="_blank" rel="noopener noreferrer" href="{personRef}" className="underline link-text">{person}</a></span>)}
    on 
    <a target="_blank" rel="noopener noreferrer" href="{imageRef}" className="underline link-text">{imageSource}</a>
  </p>
  );
};

ImageCredit.propTypes = {
  personRef: PropTypes.string,
  person: PropTypes.string,
  imageRef: PropTypes.string,
  imageSource: PropTypes.string,
};

export default ImageCredit;
