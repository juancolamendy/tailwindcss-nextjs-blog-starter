import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from '../Link';
import { Tag } from '../Tag';

import { formatDate } from '../../lib/utils/dateutils';

const BlogSummary = ({slug, date, title, summary, tags}) => {
  return (
  <article>
    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
      <dl>
        <dt className="">Published on</dt>
        <dd className="text-base font-medium leading-6 text-gray-500">
          <time dateTime={date}>{formatDate(date)}</time>
        </dd>
      </dl>
      <div className="space-y-5 xl:col-span-3">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold leading-8 tracking-tight">
              <Link
                href={`/blog/${slug}`}
                className="text-gray-900"
              >
                {title}
              </Link>
            </h2>
            <div className="flex flex-wrap">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
          <div className="prose max-w-none text-gray-500">
            {summary}
          </div>
        </div>
        <div className="text-base font-medium leading-6">
          <Link
            href={`/blog/${slug}`}
            className="text-gray-500 hover:text-gray-600"
            aria-label={`Read "${title}"`}
          >
            Read more &rarr;
          </Link>
        </div>
      </div>
    </div>
  </article>
  );
};

BlogSummary.propTypes = {
  slug: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  tags: PropTypes.array,
};

export default BlogSummary;
