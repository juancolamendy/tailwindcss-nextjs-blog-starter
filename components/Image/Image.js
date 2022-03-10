import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';

import siteMetadata from '../../data/siteMetadata';

const CustomImage = ({ alt, title, src, ...rest }) => <Image src={`${siteMetadata.site.context}${src}`} alt={alt} title={title} {...rest} />;

CustomImage.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
};

export default CustomImage;
