import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import { useRouter } from 'next/router';

import siteMetadata from '../../data/siteMetadata';
import { buildCommonSchema } from './seoschema'; 

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
  // hooks
  const router = useRouter();

  // render out
  return (
  <Head>
    <title>{title || siteMetadata.meta.title}</title>
    <meta name="robots" content="follow, index" />
    <meta name="description" content={description || siteMetadata.meta.description} />

    <meta property="og:url" content={`${siteMetadata.site.url}${siteMetadata.site.context}${router.asPath}`} />
    <meta property="og:type" content={ogType} />
    <meta property="og:site_name" content={siteMetadata.meta.title} />
    <meta property="og:description" content={description || siteMetadata.meta.description} />
    <meta property="og:title" content={title || siteMetadata.meta.title} />
    { Array.isArray(ogImage) ? (
      ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
    ) : (
      <meta property="og:image" content={ogImage} key={ogImage} />
    )}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={siteMetadata.site.twitter} />
    <meta name="twitter:title" content={title || siteMetadata.meta.title} />
    <meta name="twitter:description" content={description || siteMetadata.meta.description} />
    <meta name="twitter:image" content={twImage} />

    <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <link rel="canonical" href={`${siteMetadata.site.url}${siteMetadata.site.context}${router.asPath}`} />

    <script 
        type='application/ld+json' 
        dangerouslySetInnerHTML={ { __html: 
        `
        ${buildCommonSchema(`${siteMetadata.site.url}${siteMetadata.site.context}`, siteMetadata.site.name, siteMetadata.site.logo, siteMetadata.site.twitter, siteMetadata.author.name, siteMetadata.author.slug, siteMetadata.author.description, siteMetadata.author.image, siteMetadata.author.linkedin, siteMetadata.author.twitter)}
        `}} 
    />
  </Head>
  )
}

CommonSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogType: PropTypes.string,
  ogImage: PropTypes.string,
  twImage: PropTypes.string,
};

export default CommonSEO;
