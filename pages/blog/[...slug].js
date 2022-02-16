import { getFiles, formatSlug, getAllFilesFrontMatter, getFileBySlug } from '../../lib/mdx';

export async function getStaticPaths() {
  const posts = getFiles('blogs');
  const paths = posts.map(p => ({
    params: { slug: formatSlug(p).split('/') }
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // init
  const postSlug = params.slug.join('/');
  // find posts
  const allPosts = await getAllFilesFrontMatter('blogs');
  // post info
  const postIndex = allPosts.findIndex(post => formatSlug(post.slug) === postSlug);
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug('blogs', postSlug);
  console.log('calc:', postSlug, postIndex, prev, next, post);
  // return result
  return { props: { post, prev, next } };
}

const Blog = ({ post, prev, next }) => {
  return (
  <div>Hello world!</div>
  );
};

export default Blog;
