import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const H2 = ({ id, children, color, background }) => {
  return (
  <h2 className={classNames('text-2xl font-bold leading-9 sm:text-3xl my-4 sm:leading-10', color?color:'text-gray-800', background, background?'py-20 sm:py-24 md:py-32 text-center':'' )} id={id}>
    {children}
  </h2>
  );
};

H2.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
	children: PropTypes.node
};

export default H2;
