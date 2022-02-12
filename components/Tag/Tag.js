import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import { slug } from 'github-slugger';

const Tag = ({text}) => {
  return (
    <Link href={`/tags/${slug(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600">
        {text.split(' ').join('-')}
      </a>
    </Link>
  );
};

Tag.propTypes = {
  text: PropTypes.string,
};

export default Tag;
