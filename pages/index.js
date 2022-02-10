import { getAllFilesFrontMatter } from '../lib/mdx';

import { CommonSEO } from '../components/SEO';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blogs');
  console.log('posts:', posts);

  return { props: { posts } };
}

const Index = ({ posts }) => {
  console.log('posts:', posts);
  return (
    <>
      <CommonSEO title="my page" />
      Hello World!
    </>
  );
}

export default Index;
