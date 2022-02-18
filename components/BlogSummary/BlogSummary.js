import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from '../Link';
import { Tag } from '../Tag';
import { Image } from '../Image';

import { formatDate } from '../../lib/utils/dateutils';

const BlogSummary = ({slug, date, title, summary, tags, authorName, headerImage}) => {
  return (
  <article className="flex flex-col">
    <header className="flex flex-col space-y-1 sm:space-y-2">
      <h2 className="text-2xl font-bold leading-9 text-gray-800 sm:text-3xl sm:leading-10">
        <Link
          href={`/blog/${slug}`}
          className="text-primary-700"
        >
          {title}
        </Link>
      </h2>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <p className="text-xs">
        By <span className="font-medium leading-6 text-gray-500">{authorName}</span> · Published on <span className="font-medium leading-6 text-gray-500"><time dateTime={date}>{formatDate(date)}</time></span>
      </p>
    </header>
    <div className="flex flex-col mt-2 sm:mt-4">
      { headerImage && (<figure className="h-64 w-full relative">
        <Image src={headerImage} alt={title} title={title} layout="fill" objectFit="cover" />
      </figure>)}
      <div className="text-base text-gray-500 mt-3 sm:mt-5">
        {summary}
      </div>
    </div>
    <footer className="text-xs font-medium leading-6 mt-3">
      <Link
        href={`/blog/${slug}`}
        className="text-gray-500 link-text"
        aria-label={`Read "${title}"`}
      >
        Read more &rarr;
      </Link>
    </footer>
  </article>
  );
};

BlogSummary.propTypes = {
  slug: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  tags: PropTypes.array,
  authorName: PropTypes.string,
  headerImage: PropTypes.string,
};

export default BlogSummary;
