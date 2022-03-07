import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import siteMetadata from '../../data/siteMetadata';
import { PostSEO } from '../../components/SEO';
import { PostHeader, PostToc, PostSharer, PostFooter, PostComment, Breadcrumb } from '../../components/Post';

const buildBreadcrum = (title, href) =>  ([
  {
    href: '/',
    text: 'Home'
  },
  {
    href: '/blogs',
    text: 'Posts'
  },
  {
    href: href,
    text: title
  } 
]);

const PostLayout = ({ frontMatter, toc, prev, next, children }) => {
  // hooks
  const router = useRouter();

  // render out
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
      breadcrum={buildBreadcrum(frontMatter.title, router.asPath)}
    />
    <main role="document">
      <article>
        <PostSharer title={frontMatter.title} />
        <PostHeader frontMatter={frontMatter} />
        <Breadcrumb list={buildBreadcrum(frontMatter.title, router.asPath)} />
        <PostToc toc={toc} />
        <section className="mb-auto" role="content">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 pb-10">
            <div className="prose max-w-none" role="post-content">
              {children}
            </div>
            { siteMetadata.comment && siteMetadata.comment.provider && <PostComment frontMatter={frontMatter} /> }
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
  frontMatter: PropTypes.object,
	toc: PropTypes.array,
  prev: PropTypes.object,
  next: PropTypes.object,
};

export default PostLayout;
