import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import siteMetadata from '../../data/siteMetadata';
import { Image } from '../../components/Image';
import { PostSEO } from '../../components/SEO';
import { PersonCard, PostHeader, PostToc, PostSharer, PostFooter, PostComment, Breadcrumb } from '../../components/Post';

const buildBreadcrum = (title, href) =>  ([
  {
    href: `${siteMetadata.site.url}`,
    text: 'Home'
  },
  {
    href: `${siteMetadata.site.url}${siteMetadata.site.context}`,
    text: 'Blogs'
  },
  {
    href: `${siteMetadata.site.url}${siteMetadata.site.context}${href}`,
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
    <main role="document" className="bg-gray-100/60">
      <article>
        <PostSharer title={frontMatter.title} />
        <PostHeader frontMatter={frontMatter} />
        <Breadcrumb list={buildBreadcrum(frontMatter.title, router.asPath)} />

        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4 my-4 md:my-6 px-2">
          <section className="col-span-12 md:col-span-9 border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 px-4 py-6 md:px-8 md:py-10 bg-white">
            <div className="relative block h-64 w-full max-w-[320px] rounded-lg">
              <Image src={frontMatter.headerImage} alt={frontMatter.title} title={frontMatter.title} layout="fill" className="object-cover w-full h-full rounded-xl" />
            </div>
            <div className="prose max-w-none mt-3" role="post-content">
              {children}
            </div>
          </section>

          <div className="col-span-12 md:col-span-3 order-first md:order-last self-start space-y-4 ">            
            <PersonCard 
              name={frontMatter.authorDetails.name}
              title={frontMatter.authorDetails.summary}
              profileUrl={`/authors/${frontMatter.authorDetails.slug.join('/')}`}
              imageUrl={frontMatter.authorDetails.avatar}
            />

            <div className="hidden md:block border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 px-4 md:px-8 bg-white">
              <PostToc toc={toc} />
            </div>            
          </div>


        </div>
        
        <div className="gap-4 max-w-7xl mx-auto mt-3 my-4 md:my-6 px-2">
          { siteMetadata.comment && siteMetadata.comment.provider && <PostComment frontMatter={frontMatter} /> }

          <PostFooter tags={frontMatter.tags} prev={prev} next={next} />
        </div>

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
