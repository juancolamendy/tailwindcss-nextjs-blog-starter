import React from 'react';
import PropTypes from 'prop-types';

import { PostSEO } from '../../components/SEO';

const PostLayout = ({ frontMatter, toc, author, prev, next, children }) => {
  console.log('--- toc:', toc);
  console.log('--- frontMatter:', frontMatter);
  console.log('--- author:', author);
  return (
  <>
    <PostSEO
      title={frontMatter.title}
      description={frontMatter.summary}
      authorSlug={author.slug.join('/')}
      ogImage={frontMatter.ogImage}
      twImage={frontMatter.twImage}
      date={frontMatter.date}
      lastmod={frontMatter.lastmod}
    />
    {children}
  </>
  );
};

PostLayout.propTypes = {
  children: PropTypes.node,
};

export default PostLayout;
