import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CommentButton from './CommentButton';

import siteMetadata from '../../data/siteMetadata';

const COMMENTS_ID = 'disqus_thread';

const Disqus = ({ frontMatter }) => {
  const [enableLoadComments, setEnabledLoadComments] = useState(true);

  const handleComments = () => {
    setEnabledLoadComments(false);

    window.disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = frontMatter.slug;
    }
    if (window.DISQUS === undefined) {
      const script = document.createElement('script');
      script.src = 'https://' + process.env.NEXT_PUBLIC_DISQUS_SHORTNAME + '.disqus.com/embed.js';
      script.setAttribute('data-timestamp', + new Date());
      script.setAttribute('crossorigin', 'anonymous');
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.DISQUS.reset({ reload: true });
    }
  };

  return (
    <>
      {enableLoadComments && <CommentButton onClick={handleComments} /> }
      <div className="disqus-frame" id={COMMENTS_ID} />
    </>
  )
}

Disqus.propTypes = {
  frontMatter: PropTypes.object,
};

export default Disqus;
