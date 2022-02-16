import { getFiles, formatSlug, getAllFilesFrontMatter, getFileBySlug } from '../../lib/mdx';
import { MDXLayoutRenderer } from '../../components/MDXComponents';

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
  const { mdxSource, toc, frontMatter } = post
  return (
  <>
    {frontMatter.draft !== true ? (
      <MDXLayoutRenderer
        layout={'PostLayout'}
        toc={toc}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        authorDetails={''}
        prev={prev}
        next={next}
      />
    ) : (
      <div className="mt-24 text-center">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </h1>
      </div>
    )}
  </>
  );
};

export default Blog;
