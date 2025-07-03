import React from 'react';
import PropTypes from 'prop-types';
import Script from 'next/script';

const MetaPixel = ({ id }) => (
  <>
    {/* Facebook Pixel Script */}
    <Script id="fb-pixel-script" strategy="lazyOnload">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${id}');
        fbq('track', 'PageView');
      `}
    </Script>
    {/* Facebook Pixel noscript fallback */}
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${id}&ev=PageView&noscript=1`}
        alt="fbpx"
      />
    </noscript>
  </>
);

MetaPixel.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MetaPixel;
