import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../Link';

const PostToc = ({ toc }) => {
  return (
  <section className="flex flex-col justify-center items-center space-y-2 py-6" role="toc">
    <h2 className="text-2xl font-bold leading-9 text-gray-800 sm:text-3xl my-2 sm:leading-10">Contents</h2>
    { toc.map(x => (<h3 key={x.url}><Link className="text-primary-800 text-lg font-semibold link-text" href={x.url}>{x.value}</Link></h3>)) }
  </section>
  );
};

PostToc.propTypes = {
	toc: PropTypes.array
};

export default PostToc;
