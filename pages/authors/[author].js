import { getFiles, formatSlug, parseMdxBySlug, bundleIntoMDX } from '../../lib/mdx';

import { MDXLayoutRenderer } from '../../components/MDXComponents';

export async function getStaticPaths() {
  const authors = getFiles('authors');
  const paths = authors.map(p => ({
    params: { author: formatSlug(p) }
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  // init
  const slug = params.author;
  // logic
  const [frontmatter, source] = await parseMdxBySlug('authors', [slug]);
  const { mdxSource } = await bundleIntoMDX(source);
  // return result
  return { props: { frontmatter, mdxSource } }
}

const Author = ({frontmatter, mdxSource}) => {
  return (
  <>
    <MDXLayoutRenderer
      layout={'AuthorLayout'}
      mdxSource={mdxSource}
      frontMatter={frontmatter}
    />
  </>
  );
}

export default Author;
