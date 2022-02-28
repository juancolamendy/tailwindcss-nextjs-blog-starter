import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import { useRouter } from 'next/router';

import CommonSEO from './CommonSEO';

import siteMetadata from '../../data/siteMetadata';
import { buildPageSchema } from './seoschema';

const TagSEO = ({ title, description, ogImage, twImage }) => {
  // hooks
  const router = useRouter();

  // render out
  return (
  <>
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={ogImage || `${siteMetadata.site.url}${siteMetadata.site.banner}`}
      twImage={twImage || `${siteMetadata.site.url}${siteMetadata.site.banner}`}
    />
    <Head>
      <link
        rel="alternate"
        type="application/rss+xml"
        title={`${description} - RSS feed`}
        href={`${siteMetadata.site.url}${router.asPath}/feed.xml`}
      />
    </Head>
  </>
  )
}

TagSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogImage: PropTypes.string,
  twImage: PropTypes.string,
};

export default TagSEO;
