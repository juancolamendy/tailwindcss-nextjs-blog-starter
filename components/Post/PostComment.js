import React from 'react';
import PropTypes from 'prop-types';

import dynamic from 'next/dynamic';

import siteMetadata from '../../data/siteMetadata';

const DisqusComponent = dynamic(
  () => {
    return import('./Disqus')
  },
  { ssr: false }
);

const UtterancesComponent = dynamic(
  () => {
    return import('./Utterances')
  },
  { ssr: false }
);

const PostComment = ({ frontMatter }) => {
  let term;
  switch (
    siteMetadata.comment.giscusConfig.mapping ||
    siteMetadata.comment.utterances.issueTerm
  ) {
    case 'pathname':
      term = frontMatter.slug;
      break
    case 'url':
      term = window.location.href;
      break
    case 'title':
      term = frontMatter.title;
      break
  }
  return (
  <div role="post-comment" className="flex justify-center items-center pt-6 pb-4">
    {siteMetadata.comment && siteMetadata.comment.provider === 'disqus' && (
      <DisqusComponent frontMatter={frontMatter} />
    )}
    {siteMetadata.comment && siteMetadata.comment.provider === 'utterances' && (
      <UtterancesComponent issueTerm={term} />
    )}
  </div>
  );
};

PostComment.propTypes = {
  frontMatter: PropTypes.object,
};

export default PostComment;
