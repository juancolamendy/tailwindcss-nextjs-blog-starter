import { getFiles, formatSlug, getAllFilesFrontMatter, getFileBySlug } from '../../lib/mdx';

import { MDXLayoutRenderer } from '../../components/MDXComponents';
import { PostH1 } from '../../components/PostH1';

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
  // author info
  const authorSlug = post.frontMatter.author || 'default';
  const authorData = await getFileBySlug('authors', [authorSlug]);
  const author = authorData.frontMatter;
  // return result
  return { props: { post, author, prev, next } };
}

const Post = ({ post, author, prev, next }) => {
  const { mdxSource, toc, frontMatter } = post;
  console.log('--- toc:', toc);
  console.log('--- frontMatter:', frontMatter);
  console.log('--- author:', author);
  return (
  <>
    {frontMatter.draft !== true ? (
      <MDXLayoutRenderer
        layout={'PostLayout'}
        toc={toc}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        author={author}
        prev={prev}
        next={next}
      />
    ) : (
      <div className="mt-24 text-center">
        <PostH1>
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PostH1>
      </div>
    )}
  </>
  );
};

export default Post;
