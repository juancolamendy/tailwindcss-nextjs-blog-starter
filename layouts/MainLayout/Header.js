import React from 'react';
import PropTypes from 'prop-types';

import SMNav from './SMNav';
import DefaultNav from './DefaultNav';
import { Link } from '../../components/Link';
import Logo from '../../public/static/images/logo.svg';
import siteMetadata from '../../data/siteMetadata'; 

const Header = () => {
  return (
  <header className="flex items-center justify-between py-6">
    <Link href="/" aria-label={siteMetadata.meta.title}>
      <div className="flex items-center justify-between">
        <div className="w-8 h-4 mr-3">
          <Logo />
        </div>
        <div className="hidden h-6 text-primary-700 text-2xl font-semibold sm:block link-text">
          {siteMetadata.site.name}
        </div>
      </div>
    </Link>
    <nav className="flex items-center text-base leading-5">
      <SMNav />
      <DefaultNav />
    </nav>
  </header>
  );
};

export default Header;
