import React from 'react';
import PropTypes from 'prop-types';

const CtaBox = ({ title, description, cta, link }) => {
  return (
  <div className="flex flex-col gap-8 max-w-xl text-center mx-auto px-4 py-6 my-4 bg-teal-600/90 text-white rounded">
      <div className="flex flex-col gap-1">
        <div className="text-lg font-bold text-white">
          {title}
        </div>
        <div className="flex flex-row justify-center items-center text-center text-base font-normal text-white/90">
          {description}
        </div>
      </div>
      <a href={link} rel="noreferrer" target="_blank" className="flex px-4 py-2 justify-center items-center w-full text-semibold text-white/90 border border-white/50 rounded hover:border-white/60 hover:bg-white/10 hover:text-white focus:ring-white-200">
          <span>{cta}</span>
      </a>
  </div>    
  );
};

CtaBox.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  cta: PropTypes.node,
  link: PropTypes.string,
};

export default CtaBox;
