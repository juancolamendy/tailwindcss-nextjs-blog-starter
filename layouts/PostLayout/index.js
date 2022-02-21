import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import { Link } from '../../components/Link';
import { PostSEO } from '../../components/SEO';
import { formatDate } from '../../lib/utils/dateutils';

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
    <main role="document">
      <article>
        <header>
          <div 
            className={classNames('text-center', frontMatter.headerGradient ? frontMatter.headerGradient : 'bg-primary-100', frontMatter.headerTextColor ? `text-${frontMatter.headerTextColor}` : '')}>
            <div className="flex flex-col justify-start items-center mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 space-y-4 pt-14 pb-20 sm:space-y-6 sm:pt-16 sm:pb-22 md:space-y-8 md:pt-30 md:pb-40">
              <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
                {frontMatter.title}
              </h1>
              <p className="text-2xl leading-7 font-light">
                {frontMatter.headerIntroduction || frontMatter.summary}
              </p>
              <p className="text-lg leading-7 font-extralight">
                By <Link href={`/authors/${frontMatter.authorDetails && frontMatter.authorDetails.slug ?frontMatter.authorDetails.slug.join('/') : 'default'}`} className="font-light leading-6 link-text">{frontMatter.authorDetails && frontMatter.authorDetails.name ? frontMatter.authorDetails.name : ''}</Link> · Updated: <span className="font-light leading-6"><time dateTime={frontMatter.date}>{formatDate(frontMatter.date)}</time></span>
              </p>
            </div>
          </div>
        </header>
        <section className="flex flex-col justify-center items-center space-y-2 py-6" role="toc">
          <h2 className="text-2xl font-bold leading-9 text-gray-800 sm:text-3xl my-2 sm:leading-10">Contents</h2>
          { toc.map(x => (<h3 key={x.url}><Link className="text-primary-800 text-lg font-semibold link-text" href={x.url}>{x.value}</Link></h3>)) }
        </section>
        <section className="mb-auto" role="content">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 pb-10">
            {children}
          </div>
        </section>
      </article>
    </main>
  </>
  );
};

PostLayout.propTypes = {
  children: PropTypes.node,
};

export default PostLayout;
