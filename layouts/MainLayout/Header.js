import React from 'react';
import PropTypes from 'prop-types';

import SMNav from './SMNav';
import { Link } from '../../components/Link';
import Logo from '../../lib/data/images/logo.svg'
import siteMetadata from '../../lib/utils/constants/siteMetadata'; 

const Header = () => {
  return (
  <header className="flex items-center justify-between py-6">
    <Link href="/" aria-label={siteMetadata.headerTitle}>
      <div className="flex items-center justify-between">
        <div className="w-8 h-4 mr-3">
          <Logo />
        </div>
        <div className="hidden h-6 text-2xl font-semibold sm:block">
          {siteMetadata.headerTitle}
        </div>
      </div>
    </Link>
    <div className="flex items-center text-base leading-5">
      <SMNav />
    </div>
  </header>
  );
};

export default Header;
