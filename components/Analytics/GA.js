import React from 'react';
import PropTypes from 'prop-types';

import Script from 'next/script';

const GA = ({id}) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />

      <Script strategy="lazyOnload" id="ga-script">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  );
};

GA.propTypes = {
  id: PropTypes.string,
};

export default GA;
