import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const H2 = ({ id, children, color, background, intro }) => {
  return (
  <h2 className={classNames('flex flex-column justify-center items-center rounded-md px-4', color?color:'text-gray-800', background, background?'pt-14 pb-20 sm:pt-18 sm:pb-24 md:pt-26 md:pb-32 text-center':'' )} id={id}>
    {background && (
      <div>
        <div className="text-2xl font-bold leading-9 sm:text-3xl my-4 sm:leading-10">
          {children}
        </div>
        {intro && <div className="text-lg font-light">
          {intro}
        </div>}
      </div>
    )}
    {!background && children}
  </h2>
  );
};

H2.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  intro: PropTypes.string,
	children: PropTypes.node
};

export default H2;
