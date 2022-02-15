import { getAllFilesFrontMatter } from '../lib/mdx';

import { PageSEO } from '../components/SEO';
import { BlogSummary } from '../components/BlogSummary';
import { Link } from '../components/Link';

import constants from '../lib/utils/constants';
import siteMetadata from '../lib/utils/constants/siteMetadata';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blogs');
  console.log('posts:', posts);

  return { props: { posts } };
}

const Index = ({ posts }) => {
  console.log('posts:', posts);
  return (
    <>
      <PageSEO title="Blog Starter by JC Olamendy" description="Blog Starter will help you build your blog platform faster" />
      <div className="divide-y divide-primary-200">
        <div className="space-y-2 py-2 md:space-y-5 md:py-4">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-primary-600 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-xl leading-7 text-primary-600">
            {siteMetadata.meta.blogsDescription}
          </p>
        </div>
        <ul className="divide-y divide-primary-400">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, constants.MaxDisplay).map(frontMatter => {
            const { slug, date, title, summary, tags, author, images } = frontMatter;
            return (
            <li key={slug} className="py-6 sm:py-10">
              <BlogSummary
                slug={slug} 
                date={date}
                title={title}
                summary={summary}
                tags={tags}
                authorName={author.name}
                headerImage={ (images && images.length > 0 ) ? images[0] : ''}
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
    </>
  );
}

export default Index;
