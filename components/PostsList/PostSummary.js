import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from '../Link';
import { Tag } from '../Tag';
import { Image } from '../Image';

import { formatDate } from '../../lib/utils/dateutils';

const PostSummary = ({slug, date, title, summary, tags, authorName, authorSlug, headerImage}) => {
  return (
  <article className="flex flex-col gap-3">
    <header className="flex flex-col gap-2">
      <div className="flex flex-col">
        { headerImage && (<figure className="relative"><div className="block h-64 w-full rounded-lg"><Link href={`/${slug}`}>
          <Image src={headerImage} alt={title} title={title} layout="fill" objectFit="cover" className="object-cover w-full h-full transition-all duration-200 transform hover:scale-110 rounded-xl" />
        </Link></div></figure>)}
      </div>
      <h2 className="blog-h2">
        <Link
          href={`/${slug}`}
          className="text-primary-700 link-text"
        >
          {title}
        </Link>
      </h2>
      <p className="text-xs">
        By <Link href={`/authors/${authorSlug}`} className="font-medium leading-6 text-gray-500 link-text">{authorName}</Link> · Updated: <span className="font-medium leading-6 text-gray-500"><time dateTime={date}>{formatDate(date)}</time></span>
      </p>
      <div className="text-base text-gray-500 mt-2">
        {summary}
      </div>
      <div className="flex flex-wrap">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
    </header>
    <footer className="text-xs font-medium leading-6">
      <Link
        href={`/${slug}`}
        className="text-gray-500 link-text"
        aria-label={`Read "${title}"`}
      >
        Read more &rarr;
      </Link>
    </footer>
  </article>
  );
};

PostSummary.propTypes = {
  slug: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  tags: PropTypes.array,
  authorName: PropTypes.string,
  authorSlug: PropTypes.string,
  headerImage: PropTypes.string,
};

export default PostSummary;
