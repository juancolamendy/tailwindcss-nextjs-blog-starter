import React from 'react';
import PropTypes from 'prop-types';

import Head from 'next/head';
import { useRouter } from 'next/router';

import CommonSEO from './CommonSEO';

import siteMetadata from '../../lib/utils/constants/siteMetadata';
import { buildPageSchema } from './seoschema'; 

const PageSEO = ({ title, description }) => {
  // hooks
  const router = useRouter();

  // render out
  return (
  <>
    <CommonSEO
      title={title}
      description={description}
      ogType="website"
      ogImage={`${siteMetadata.siteUrl}${siteMetadata.socials.banner}`}
      twImage={`${siteMetadata.siteUrl}${siteMetadata.socials.banner}`}
    />
    <Head>
      <script 
          type='application/ld+json' 
          dangerouslySetInnerHTML={ { __html: 
          `
          ${buildPageSchema(`${siteMetadata.siteUrl}${router.asPath}`, title, null, description, siteMetadata.siteUrl)}
          `}} 
      />      
    </Head>
  </>
  )
}

PageSEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageSEO;
