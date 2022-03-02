import { PageSEO } from '../components/SEO';

import { PostsPagedListView } from '../components/PostsList';

import { getAllFilesFrontMatter } from '../lib/mdx';
import siteMetadata from '../data/siteMetadata';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blogs');
  return { props: { posts, currentPage: 1 } };
}

const Posts = ({ posts, currentPage }) => {
  return (
  <>
    <PageSEO title={siteMetadata.meta.title} description={siteMetadata.meta.description} />
    <main className="mb-auto">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <PostsPagedListView 
          title="All Blogs"
          posts={posts}
          currentPage={currentPage}
        />
      </div>
    </main>
  </>
  );
}

export default Posts;
