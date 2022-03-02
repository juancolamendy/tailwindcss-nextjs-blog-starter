import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';

import SearchBox from './SearchBox';
import PostSummary from './PostSummary';
import Pagination from './Pagination';

import constant from '../../lib/utils/constants';

const PostsPagedListView = ({title, posts, currentPage}) => {
  // state
  const [searchValue, setSearchValue] = useState('');

  // hooks
  const filteredPosts = useMemo(() => {
    if(!searchValue) {
      return posts;
    }
    return posts.filter(x => {
      const searchContent = x.title + x.summary + x.tags.join(' ');
      return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    });
  }, [searchValue, posts]);

  const pagination = useMemo(()=>({
    currentPage,
    totalPages: Math.ceil(posts.length / constant.PostsPerPage),
  }), [currentPage, posts]);

  // render out
  return (
  <div className="divide-y">
    <div className="space-y-2 md:space-y-5 py-8 sm:py-10 md:py-12">
      <h1 className="blog-h1">
        {title}
      </h1>
      <SearchBox onChange={ e => setSearchValue(e.target.value) } />
    </div>
    <ul className="divide-y">
      {!filteredPosts.length && 'No posts found.'}
      {filteredPosts.map( frontMatter => {
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

PostsPagedListView.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.array,
  currentPage: PropTypes.number,
};

export default PostsPagedListView;
