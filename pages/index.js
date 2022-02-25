import { getAllFilesFrontMatter } from '../lib/mdx';

import { PageSEO } from '../components/SEO';
import { PostSummary } from '../components/PostSummary';
import { Link } from '../components/Link';
import { NewsletterForm } from '../components/NewsletterForm';

import constants from '../lib/utils/constants';
import siteMetadata from '../data/siteMetadata';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blogs');
  return { props: { posts } };
}

const Index = ({ posts }) => {
  // console.log('posts:', posts);
  return (
    <>
      <PageSEO title={siteMetadata.meta.title} description={siteMetadata.meta.description} />
      <section>
        <div className="flex flex-col justify-center items-center space-y-4 py-10 bg-primary-100 sm:space-y-6 sm:py-14 md:space-y-8 md:py-16">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-800 sm:text-4xl sm:leading-10 md:text-5xl md:leading-12">
            Get Exclusive Tips
          </h1>
          <p className="text-xl leading-7 text-gray-600">
            {siteMetadata.meta.blogsDescription}
          </p>
          { siteMetadata.newsletter && siteMetadata.newsletter.provider && 
          (<div className="flex justify-center items-center w-full md:w-3/4 lg:w-5/12 py-4 sm:py-6 px-2">
            <NewsletterForm /> 
          </div>)}
        </div>
      </section>
      <main className="mb-auto">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="divide-y divide-primary-200">
            <ul className="divide-y divide-primary-400">
              {!posts.length && 'No posts found.'}
              {posts.slice(0, constants.MaxDisplay).map(frontMatter => {
                const { slug, date, title, summary, tags, authorDetails, headerImage } = frontMatter;
                return (
                <li key={slug} className="py-6 sm:py-10">
                  <PostSummary
                    slug={slug} 
                    date={date}
                    title={title}
                    summary={summary}
                    tags={tags}
                    authorName={authorDetails.name}
                    authorSlug={authorDetails.slug ? authorDetails.slug.join('/') : 'default'}
                    headerImage={headerImage}
                  />
                </li>
                )
              })}
            </ul>
          </div>
          {posts.length > constants.MaxDisplay && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="text-primary-500 link-text"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
          )}
        </div>
      </main>
    </>
  );
}

export default Index;
