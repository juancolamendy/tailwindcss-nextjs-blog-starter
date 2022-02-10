import { getAllFilesFrontMatter } from '../lib/mdx';

import { PageSEO } from '../components/SEO';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blogs');
  console.log('posts:', posts);

  return { props: { posts } };
}

const Index = ({ posts }) => {
  console.log('posts:', posts);
  return (
    <>
      <PageSEO title="my page" description="description and page" />
      Hello World!
    </>
  );
}

export default Index;
