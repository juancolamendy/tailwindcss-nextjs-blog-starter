import { useState } from 'react';
import classNames from 'classnames';

const NewsletterForm = () => {
  // state
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState(false);
  
  // effect
  // render out
  return (
  <>
    <form className="flex flex-col w-full sm:flex-row sm:w-5/12">
      <div className="w-full sm:w-2/3">
        <label className="sr-only" htmlFor="email-input">
          Email address
        </label>
        <input
          autoComplete="email"
          className="w-full px-4 border-2 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
          id="email-input"
          name="email"
          placeholder={subscribed ? "You're subscribed !  🎉" : 'Email Address'}
          required
          type="email"
          disabled={subscribed}
        />
      </div>
      <div className="flex w-full sm:w-1/3 mt-2 ml-0 sm:mt-0 sm:ml-2">
        <button
          className={classNames('w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black', subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400')}
          type="submit"
          disabled={subscribed}
        >
          {subscribed ? 'Thank you!' : 'Sign up'}
        </button>
      </div>
    </form>
    {error && 
      <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">Your e-mail address is invalid or you are already subscribed!</div>
    }
  </>
  );
};

export default NewsletterForm;
