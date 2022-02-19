import React from 'react';
import PropTypes from 'prop-types';

import { PostSEO } from '../../components/SEO';

const PostLayout = ({ frontMatter, toc, prev, next, children }) => {
  console.log('--- toc:', toc);
  console.log('--- frontMatter:', frontMatter);
  return (
  <>
    <PostSEO
      title={frontMatter.title}
      description={frontMatter.summary}
      authorSlug={frontMatter.authorDetails.slug.join('/')}
      ogImage={frontMatter.ogImage}
      twImage={frontMatter.twImage}
      date={frontMatter.date}
      lastmod={frontMatter.lastmod}
    />
    <section>
      <div className="flex flex-col justify-center items-center space-y-4 py-10 bg-primary-100 sm:space-y-6 sm:py-14 md:space-y-8 md:py-16">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
          Get Exclusive Tips
        </h1>
        <p className="text-xl leading-7 text-gray-600">
          description
        </p>
      </div>
    </section>
    <main className="mb-auto">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        {children}
      </div>
    </main>
  </>
  );
};

PostLayout.propTypes = {
  children: PropTypes.node,
};

export default PostLayout;
