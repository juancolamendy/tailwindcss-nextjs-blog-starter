import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';

const CustomImage = ({ alt, title, ...rest }) => <Image alt={alt} title={title} {...rest} />;

CustomImage.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default CustomImage;
