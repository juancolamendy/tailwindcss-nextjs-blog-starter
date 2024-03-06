import React from 'react';
import PropTypes from 'prop-types';

import Image from 'next/image';

const PersonCard = ({ name, title, profileUrl, imageUrl }) => {
  return (
  <div className="border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 p-4 bg-white">
    <div className="flex items-center text-sm justify-start space-x-3 mt-1">
      <Image src={imageUrl} alt="" width="48px" height="48px" className="w-12 h-12 rounded-full" />
      <div className="flex flex-col text-sm">
        <span className="uppercase text-[10px] font-semibold text-gray-600 tracking-[2px]">Written by:</span> 
        <a href={profileUrl} className="hover:text-gray-700 hover:underline"><strong>{name}</strong></a> 
        <span className="text-xs">{title}</span>
      </div>
    </div>
  </div>    
  );
};

PersonCard.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  profileUrl: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default PersonCard;
