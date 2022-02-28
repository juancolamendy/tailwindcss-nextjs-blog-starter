import { slug } from 'github-slugger'

import { TagSEO } from '../../components/SEO';
import { Link } from '../../components/Link';
import { PostSummary } from '../../components/PostsList';

import { getAllFilesFrontMatter } from '../../lib/mdx';
import { getAllTags } from '../../lib/tags'; 
import constants from '../../lib/utils/constants'; 
import siteMetadata from '../../data/siteMetadata';

export async function getStaticPaths() {
  const tags = await getAllTags();

  return {
    paths: tags.map( tag => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blogs');
  const filteredPosts = allPosts.filter( post => post.draft !== true && post.tags.map(t => slug(t)).includes(params.tag) );
  return { props: { posts: filteredPosts, tag: params.tag } };
}

const Tag = ({ posts, tag }) => {
  console.log('--- posts:', posts);
  console.log('--- tag:', tag);
  return (<>
    <TagSEO title={siteMetadata.meta.title} description={siteMetadata.meta.description} />
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
  </>);
};

export default Tag;
