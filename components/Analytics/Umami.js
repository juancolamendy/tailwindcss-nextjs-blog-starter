import React from 'react';
import PropTypes from 'prop-types';

import Script from 'next/script';

const Umami = ({id, instanceHost}) => {
  return (
    <>
      <Script
        async
        defer
        data-website-id={id}
        src={instanceHost} 
      />
    </>
  );
};

Umami.propTypes = {
  id: PropTypes.string,
  instanceHost: PropTypes.string,
};

export default Umami;
