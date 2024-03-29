import React from 'react';
import PropTypes from 'prop-types';

import PostSummary from './PostSummary';
import { Link } from '../Link';

import constants from '../../lib/utils/constants';

const PostsSlicedListView = ({ posts }) => {
  return (<>
  <ul className="grid max-w-md grid-cols-1 mx-auto md:grid-cols-3 gap-y-12 md:gap-x-8 lg:gap-x-16 md:max-w-none">
    {!posts.length && 'No posts found.'}
    {posts.slice(0, constants.MaxDisplay).map(frontMatter => {
      const { slug, date, title, summary, tags, authorDetails, headerImage } = frontMatter;
      return (
      <li key={slug} className="py-6 sm:py-10">
        <PostSummary
          slug={slug} 
          date={date}
          title={title}
          summary={summary}
          tags={tags}
          authorName={authorDetails.name}
          authorSlug={authorDetails.slug ? authorDetails.slug.join('/') : 'default'}
          headerImage={headerImage}
        />
      </li>
      )
    })}
  </ul>
  {posts.length > constants.MaxDisplay && (
  <div className="flex justify-end text-base font-medium leading-6">
    <Link
      href="/page"
      className="text-primary-500 link-text"
      aria-label="all posts"
    >
      All Posts &rarr;
    </Link>
  </div>
  )}
  </>);
};

PostsSlicedListView.propTypes = {
  posts: PropTypes.array,
};

export default PostsSlicedListView;
