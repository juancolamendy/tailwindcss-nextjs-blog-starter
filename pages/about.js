import { parseMdxBySlug, bundleIntoMDX } from '../lib/mdx';

import { MDXLayoutRenderer } from '../components/MDXComponents';

export async function getStaticProps() {
  const [frontmatter, source] = await parseMdxBySlug('authors', ['default'])
  const { mdxSource } = await bundleIntoMDX(source);
  return { props: { frontmatter, mdxSource } }
}

const About = ({frontmatter, mdxSource}) => {
  return (
  <>
    <MDXLayoutRenderer
      layout={'AuthorLayout'}
      mdxSource={mdxSource}
      frontMatter={frontmatter}
    />
  </>
  );
};

export default About;
