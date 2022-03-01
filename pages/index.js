import { getAllFilesFrontMatter } from '../lib/mdx';

import { PageSEO } from '../components/SEO';
import { PostsSlicedListView } from '../components/PostsList';
import { NewsletterForm } from '../components/NewsletterForm';

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
          <h1 className="blog-h1">
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
          <PostsSlicedListView posts={posts} />
        </div>
      </main>
    </>
  );
}

export default Index;
