import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../../components/Link';

import classNames from 'classnames';

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
      <div 
        className={classNames('text-center', frontMatter.headerGradient ? frontMatter.headerGradient : 'bg-primary-100', frontMatter.headerTextColor ? `text-${frontMatter.headerTextColor}` : '')}>
        <div className="flex flex-col justify-start items-center mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 space-y-4 pt-10 pb-16 sm:space-y-6 sm:pt-12 sm:pb-18 md:space-y-8 md:pt-14 md:pb-20">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
            {frontMatter.title}
          </h1>
          <p className="text-xl leading-7 font-light">
            {frontMatter.headerIntroduction || frontMatter.summary}
          </p>
          <div className="flex flex-col justify-center items-center space-y-2 pt-6">
            <h2 className="text-2xl font-bold leading-9 text-gray-800 sm:text-3xl my-2 sm:leading-10">Table of Content</h2>
            { toc.map(x => (<h3 key={x.url}><Link className="text-primary-800 font-semibold link-text" href={x.url}>{x.value}</Link></h3>)) }
          </div>
        </div>
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
