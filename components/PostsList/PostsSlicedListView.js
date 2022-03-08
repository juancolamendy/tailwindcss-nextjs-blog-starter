import React from 'react';
import PropTypes from 'prop-types';

import PostSummary from './PostSummary';
import { Link } from '../Link';

import constants from '../../lib/utils/constants';

const PostsSlicedListView = ({ posts }) => {
  return (<>
  <div className="divide-y divide-primary-200">
    <ul className="divide-y divide-primary-400">
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
  </div>
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
