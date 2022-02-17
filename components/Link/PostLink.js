import React from 'react';
import PropTypes from 'prop-types';

import CustomLink from './Link';

const PostLink = ({href, ...rest}) => {
  return (<CustomLink href={href} className="underline link-text" {...rest} />);
};

PostLink.propTypes = {
	href: PropTypes.string
};

export default PostLink;
