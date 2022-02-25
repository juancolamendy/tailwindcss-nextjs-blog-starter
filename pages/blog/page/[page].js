import { PageSEO } from '../../../components/SEO';

import constant from '../../../lib/utils/constants';
import { getAllFilesFrontMatter, getFiles } from '../../../lib/mdx';
import siteMetadata from '../../../data/siteMetadata';

export async function getStaticPaths() {
  const posts = getFiles('blogs');
  const totalPages = Math.ceil(posts.length / constant.PostsPerPage);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getAllFilesFrontMatter('blogs');
  const pageNumber = parseInt(params.page);
  return { props: { posts, currentPage: pageNumber } };
}

const PostPage = ({ posts, currentPage }) => {
  console.log('posts:', posts);
  console.log('currentPage:', currentPage);

  return (
  <>
    <PageSEO title={siteMetadata.meta.title} description={siteMetadata.meta.description} />
    All Paged Blogs
  </>
  );
};

export default PostPage;
