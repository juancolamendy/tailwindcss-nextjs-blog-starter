import { getAllFilesFrontMatter } from '../lib/mdx';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blogs');
  return { props: { posts, currentPage: 1 } };
}

const Posts = ({ posts, currentPage }) => {
  console.log('posts:', posts);
  console.log('currentPage:', currentPage);

  return (<>All Blogs</>);
}

export default Posts;
