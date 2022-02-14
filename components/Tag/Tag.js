import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import { slug } from 'github-slugger';

const Tag = ({text}) => {
  return (
    <Link href={`/tags/${slug(text)}`}>
      <a className="mr-3 text-xs font-light uppercase transition duration-300 ease-in-out hover:opacity-60">
        {text.split(' ').join('-')}
      </a>
    </Link>
  );
};

Tag.propTypes = {
  text: PropTypes.string,
};

export default Tag;
