import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { SearchBox } from '../SearchBox';
import { PostSummary } from '../PostSummary';
import { Pagination } from '../Pagination';

import constant from '../../lib/utils/constants';

const PostsListView = ({title, posts, currentPage}) => {
  // state
  const [searchValue, setSearchValue] = useState('');

  // calculations
  const displayPosts = posts;
  const pagination = {
    currentPage,
    totalPages: Math.ceil(posts.length / constant.PostsPerPage),
  };

  console.log('--- searchValue:', searchValue);
  // render out
  return (
  <div className="divide-y">
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {title}
      </h1>
      <SearchBox onChange={ e => setSearchValue(e.target.value) } />
    </div>
    <ul>
      {!displayPosts.length && 'No posts found.'}
      {displayPosts.map( frontMatter => {
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
        );
      })}
    </ul>
    {pagination && pagination.totalPages > 1 && !searchValue && (
      <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
    )} 
  </div>
  );
};

PostsListView.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.array,
  currentPage: PropTypes.number,
};

export default PostsListView;
