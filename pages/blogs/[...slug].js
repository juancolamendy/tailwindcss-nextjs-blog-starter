import { getFiles, formatSlug, getAllFilesFrontMatter, getBlogBySlug } from '../../lib/mdx';

import { MDXLayoutRenderer } from '../../components/MDXComponents';
import { H1 } from '../../components/Post';

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
  const post = await getBlogBySlug(postSlug);
  // return result
  return { props: { post, prev, next } };
}

const Post = ({ post, prev, next }) => {
  const { mdxSource, toc, frontMatter } = post;
  return (
  <>
    {frontMatter.draft !== true ? (
      <MDXLayoutRenderer
        layout={'PostLayout'}
        toc={toc}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        prev={prev}
        next={next}
      />
    ) : (
      <div className="mt-24 text-center">
        <H1>
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </H1>
      </div>
    )}
  </>
  );
};

export default Post;
