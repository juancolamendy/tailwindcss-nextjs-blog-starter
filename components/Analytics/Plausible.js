import React from 'react';
import PropTypes from 'prop-types';

import Script from 'next/script';

const Plausible = ({domain}) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        data-domain={domain}
        src="https://plausible.io/js/plausible.js"
      />
      <Script strategy="lazyOnload" id="plausible-script">
        {`
            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
      </Script>
    </>
  );
};

Plausible.propTypes = {
  domain: PropTypes.string,
};

export default Plausible;
