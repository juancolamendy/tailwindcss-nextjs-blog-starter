import React from 'react';
import PropTypes from 'prop-types';

import SMNav from './SMNav';
import DefaultNav from './DefaultNav';
import { Link } from '../../components/Link';
import Logo from '../../public/static/images/logo.svg';
import siteMetadata from '../../data/siteMetadata'; 

const Header = () => {
  return (
  <header className="py-8 bg-primary-100">
    <div className="flex items-center justify-between mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Link href="/" aria-label={siteMetadata.meta.title}>
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 mt-0 sm:mt-2 mr-3 sm:mr-5">
            <Logo />
          </div>
          <div className="hidden h-6 text-primary-700 text-3xl font-semibold sm:block link-text">
            {siteMetadata.site.name}
          </div>
        </div>
      </Link>
      <nav className="flex items-center text-base leading-5">
        <SMNav />
        <DefaultNav />
      </nav>
    </div>
  </header>
  );
};

export default Header;
