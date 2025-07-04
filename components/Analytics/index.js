import React from 'react';

import GA from './GA';
import Plausible from './Plausible';
import SimpleAnalytics from './SimpleAnalytics';
import Umami from './Umami';
import MetaPixel from './MetaPixel';

import siteMetadata from '../../data/siteMetadata';

const isProduction = process.env.NODE_ENV === 'production';

const Analytics = () => {
  return (
    <>
      {isProduction && siteMetadata.analytics.googleAnalyticsId &&
        <GA id={siteMetadata.analytics.googleAnalyticsId}/>
      }
      {isProduction && siteMetadata.analytics.facebookPixelId &&
        <MetaPixel id={siteMetadata.analytics.facebookPixelId} />
      }
      {isProduction && siteMetadata.analytics.plausibleDataDomain && 
        <Plausible domain={siteMetadata.analytics.plausibleDataDomain} />
      }
      {isProduction && siteMetadata.analytics.simpleAnalytics && <SimpleAnalytics />}
      {isProduction && siteMetadata.analytics.umamiWebsiteId && 
        <Umami id={siteMetadata.analytics.umamiWebsiteId} 
          instanceHost={siteMetadata.analytics.umamiInstance}
        />
      }
    </>
  );
}

export default Analytics
