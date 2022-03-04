import React from 'react';
import PropTypes from 'prop-types';

import { Link } from '../Link';

const BreadcrumbHome = ({href, text}) => {
  return (
  <li key={text} className="inline-flex items-center">
    <Link href={href} className="inline-flex items-center text-sm text-primary-800 font-light link-text">
      <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
      {text}
    </Link>
  </li>
  );
};

const BreadcrumbItem = ({href, text}) => {
  return (
  <li key={text} className="breadcrumitem">
    <div className="flex items-center">
      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      <Link href={href} className="ml-1 text-sm text-primary-800 font-light link-text">
        {text}
      </Link>
    </div>
  </li>
  );
};

const BreadcrumbPage = ({text}) => {
  return (
  <li key={text} className="breadcrumpage" aria-current="page">
    <div className="flex items-center">
      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
      <span className="ml-1 text-sm font-medium text-primary-400 md:ml-2">
        {text}
      </span>
    </div>
  </li>
  );
};

const Breadcrumb = ({ list }) => {
  const n = list.length;
  return (
  <section className="mb-auto border-b-2 border-gray-100" role="content">
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-4">
      <nav className="flex justify-start items-center" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          { list.map( (x,i) => {
            if(i === 0) {
              return (<BreadcrumbHome key={x.text} href={x.href} text={x.text} />)
            }
            if(i === n-1) {
              return (<BreadcrumbPage key={x.text} text={x.text} />);
            }
            return (<BreadcrumbItem key={x.text} href={x.href} text={x.text} />);
          })}
        </ol>
      </nav>
    </div>
  </section>
  );
};

Breadcrumb.propTypes = {
	list: PropTypes.array
};

export default Breadcrumb;
