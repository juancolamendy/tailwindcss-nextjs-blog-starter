import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const H2 = ({ id, children, color, background, intro }) => {
  return (
  <h2 className={classNames('text-2xl sm:text-4xl font-bold flex flex-column items-center rounded-md', color?color:'text-gray-800', background, background?'pt-14 pb-20 sm:pt-18 sm:pb-24 md:pt-26 md:pb-32':'' )} id={id}>
    {background && (
      <div>
        <div className="font-bold leading-9 my-4 sm:leading-10">
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
