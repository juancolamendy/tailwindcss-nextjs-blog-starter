import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import CommentButton from './CommentButton';

import siteMetadata from '../../data/siteMetadata';

const COMMENTS_ID = 'comments-container';

const Utterances = ({ issueTerm }) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true);

  const handleComments = useCallback(() => {
    setEnabledLoadComments(false);
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', process.env.NEXT_PUBLIC_UTTERANCES_REPO);
    script.setAttribute('issue-term', issueTerm);
    script.setAttribute('label', siteMetadata.comment.utterances.label);
    script.setAttribute('theme', siteMetadata.comment.utterances.theme);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const commentsElem = document.getElementById(COMMENTS_ID);
    if (commentsElem) commentsElem.appendChild(script);

    return () => {
      const commentsElem = document.getElementById(COMMENTS_ID);
      if (commentsElem) commentsElem.innerHTML = '';
    }
  }, [issueTerm]);

  useEffect(() => {
    const iframe = document.querySelector('iframe.utterances-frame');
    if (!iframe) return;
    handleComments();
  }, [handleComments]);

  return (
  <>
    { enableLoadComments && <CommentButton onClick={handleComments} /> }
    <div className="utterances-frame relative" id={COMMENTS_ID} />
  </>
  );
}

Utterances.propTypes = {
  issueTerm: PropTypes.string,
};

export default Utterances;
