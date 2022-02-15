import { useState } from 'react';
import classNames from 'classnames';

import siteMetadata from '../../lib/utils/constants/siteMetadata';

const NewsletterForm = () => {
  // state
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);
  
  // effect
  // render out
  return (
  <div className="flex flex-col justify-center items-center w-full">
    <form className="flex flex-col w-full sm:flex-row sm:w-5/12">
      <div className="w-full sm:w-2/3">
        <label className="sr-only" htmlFor="email-input">
          Email address
        </label>
        <input
          autoComplete="email"
          className="w-full px-4 py-2 border-2 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          id="email-input"
          name="email"
          placeholder={subscribed ? siteMetadata.newsletter.subscribedMsg : 'Email Address'}
          required
          type="email"
          disabled={subscribed}
        />
      </div>
      <div className="flex w-full sm:w-1/3 mt-2 ml-0 sm:mt-0 sm:ml-3">
        <button
          className={classNames('w-full rounded-md py-2 px-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transform transition-all duration-700 ease-in-out', subscribed ? 'cursor-default bg-primary-200' : 'hover:bg-primary-700 hover:scale-110 bg-primary-500')}
          type="submit"
          disabled={subscribed}
        >
          {subscribed ? siteMetadata.newsletter.thankyouMsg : siteMetadata.newsletter.signupLabel}
        </button>
      </div>
    </form>
    {error && 
      <div className="pt-2 text-sm text-red-500">{siteMetadata.newsletter.errorMsg}</div>
    }
  </div>
  );
};

export default NewsletterForm;
