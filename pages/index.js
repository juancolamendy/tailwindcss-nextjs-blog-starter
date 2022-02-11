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
      <PageSEO title="Blog Starter by JC Olamendy" description="Blog Starter will help you build your blog platform faster" />
      Hello World!
    </>
  );
}

export default Index;
