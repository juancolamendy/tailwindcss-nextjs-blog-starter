import Head from 'next/head';
import { useRouter } from 'next/router';

import siteMetadata from '../../lib/utils/constants/siteMetadata';
import { buildCommonSchema } from './seoschema'; 

const CommonSEO = ({ title, description, ogType, ogImage, twImage }) => {
  // hooks
  const router = useRouter();

  // render out
  return (
  <Head>
    <title>{title || siteMetadata.title}</title>
    <meta name="robots" content="follow, index" />
    <meta name="description" content={description || siteMetadata.description} />
    <meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
    <meta property="og:type" content={ogType} />
    <meta property="og:site_name" content={siteMetadata.title} />
    <meta property="og:description" content={description || siteMetadata.description} />
    <meta property="og:title" content={title || siteMetadata.title} />
    { Array.isArray(ogImage) ? (
      ogImage.map(({ url }) => <meta property="og:image" content={url} key={url} />)
    ) : (
      <meta property="og:image" content={ogImage} key={ogImage} />
    )}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content={siteMetadata.twitter} />
    <meta name="twitter:title" content={title || siteMetadata.title} />
    <meta name="twitter:description" content={description || siteMetadata.description} />
    <meta name="twitter:image" content={twImage} />

    <script 
        type='application/ld+json' 
        dangerouslySetInnerHTML={ { __html: 
        `
        ${buildCommonSchema(siteMetadata.siteUrl, siteMetadata.siteName, siteMetadata.siteLogo, siteMetadata.author, siteMetadata.authorSlug, siteMetadata.authorDescription, siteMetadata.authorImage, siteMetadata.socials.linkedin, siteMetadata.socials.twitter)}
        `}} 
    />
  </Head>
  )
}

export default CommonSEO;
