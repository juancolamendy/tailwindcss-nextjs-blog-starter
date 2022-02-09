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
        className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
      >
        {link.title}
      </Link>
    ))}
  </div>
  );
};

export default SMNav;
