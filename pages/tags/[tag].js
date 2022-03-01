import { slug } from 'github-slugger'

import { TagSEO } from '../../components/SEO';
import { PostsSlicedListView } from '../../components/PostsList';

import { getAllFilesFrontMatter } from '../../lib/mdx';
import { getAllTags } from '../../lib/tags'; 
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
        <PostsSlicedListView posts={posts} />
      </div>
    </main>
  </>);
};

export default Tag;
