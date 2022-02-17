import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import { useRouter } from 'next/router';

import CommonSEO from './CommonSEO';

import { formatToISO } from '../../lib/utils/dateutils';

import siteMetadata from '../../data/siteMetadata';
import { buildPostSchema } from './seoschema'; 

const PostSEO = ({title, description, authorSlug, ogImage, twImage, date, lastmod}) => {
  // hooks
  const router = useRouter();

  // render out
  return (
  <>
    <CommonSEO
      title={title}
      description={description}
      ogType="article"
      ogImage={ogImage || `${siteMetadata.site.url}${siteMetadata.site.banner}`}
      twImage={twImage || `${siteMetadata.site.url}${siteMetadata.site.banner}`}
    />
    <Head>
      <meta property="article:published_time" content={formatToISO(date)} />
      <meta property="article:modified_time" content={formatToISO(lastmod || date)} />
      <link rel="canonical" href={`${siteMetadata.site.url}${router.asPath}`} />
      <script 
          type='application/ld+json' 
          dangerouslySetInnerHTML={ { __html: 
          `
          ${buildPostSchema(`${siteMetadata.site.url}${router.asPath}`, title, description, siteMetadata.site.url, authorSlug, ogImage, date)}
          `}} 
      />      
    </Head>
  </>
  )

};

PostSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  authorSlug: PropTypes.string,
  ogImage: PropTypes.string,
  twImage: PropTypes.string,
  date: PropTypes.string,
  lastmod: PropTypes.string,
};

export default PostSEO;
