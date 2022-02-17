import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );
  }

  if (isAnchorLink) {
    return (<a href={href} {...rest} />);
  }

  return (<a  target="_blank" rel="noopener noreferrer" href={href} {...rest} />);
}

CustomLink.propTypes = {
	href: PropTypes.string
};

export default CustomLink;
