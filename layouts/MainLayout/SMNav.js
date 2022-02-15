import React from 'react';

import { Link } from '../../components/Link';
import headerNavLinks from '../../lib/utils/constants/headerNavLinks';

const SMNav = () => {
  return (
  <div className="hidden sm:block">
    {headerNavLinks.map((link) => (
      <Link
        key={link.title}
        href={link.href}
        className="text-primary-800 font-light p-4 link-text"
      >
        {link.title}
      </Link>
    ))}
  </div>
  );
};

export default SMNav;
