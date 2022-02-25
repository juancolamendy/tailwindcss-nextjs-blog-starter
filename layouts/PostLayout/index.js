import React from 'react';
import PropTypes from 'prop-types';

import { PostSEO } from '../../components/SEO';
import { PostHeader, PostToc, PostSharer, PostFooter, PostComment } from '../../components/Post';

const PostLayout = ({ frontMatter, toc, prev, next, children }) => {
  // console.log('--- toc:', toc);
  // console.log('--- frontMatter:', frontMatter);
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
        <PostSharer title={frontMatter.title} />
        <PostHeader frontMatter={frontMatter} />
        <PostToc toc={toc} />
        <section className="mb-auto" role="content">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 pb-10">
            <div className="prose max-w-none" role="post-content">
              {children}
            </div>
            <PostComment frontMatter={frontMatter} />
            <PostFooter tags={frontMatter.tags} prev={prev} next={next} />
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
