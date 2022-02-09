import React from 'react';

import Script from 'next/script';

const SimpleAnalytics = () => {
  return (
    <>
      <Script strategy="lazyOnload" id="sa-script">
        {`
            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};
        `}
      </Script>
      <Script strategy="lazyOnload" src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </>
  );
};

SimpleAnalytics.propTypes = {
};

export default SimpleAnalytics;
